import produce from "immer";
import { ProjectBoard, ProjectColumn, ProjectItemColumn, ProjectQueryColumn } from "./DataScheme";
import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    fetchIssueOrPullRequest,
    fetchIssueOrPullRequestParam,
    fetchIssueOrPullRequestWithSearchQuery,
    GitHubSearchResultItemJSON
} from "../queries/github-query";
import { CardMetaData, ProjectBoardData } from "../board/MyBoard";
import { ReactTrello } from "react-trello";
import { fetchProjectData, updateProjectData } from "./github-data";

export type State = {
    projectBoard: ProjectBoard;
    projectContents: ProjectBoardData;
};
const initialState: State = {
    projectBoard: [],
    projectContents: {
        lanes: []
    }
};

const isQueryColumn = (column?: ProjectColumn): column is ProjectQueryColumn => {
    return column !== undefined && "type" in column && column.type === "query";
};
const isProjectItemColumn = (column?: ProjectColumn): column is ProjectItemColumn => {
    return column !== undefined && !("type" in column) && Array.isArray(column.items);
};
export const fetchProjectBoard = createAsyncThunk("project/fetchProjectBoard", async () => {
    // return require("./debug-data.json");
    return fetchProjectData();
});

export const fetchProjectContents = createAsyncThunk("project/fetchProjectContents", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as State;
    const projectBoard = state.projectBoard;
    const projectItems = projectBoard.flatMap((projectColumn) => {
        if (!("items" in projectColumn)) {
            return [];
        }
        return projectColumn.items;
    });
    const params = projectItems.flatMap((projectItem) => {
        const issuePattern = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pull))\/(?<number>[0-9]+)/;
        const match = projectItem.url.match(issuePattern);
        if (!match) {
            return [];
        }
        const param: fetchIssueOrPullRequestParam = {
            owner: match.groups?.owner as string,
            repo: match.groups?.repo as string,
            type: match.groups?.type === "issues" ? "issue" : "pr",
            number: match.groups?.number as string
        };
        return [param];
    });
    const responses = await fetchIssueOrPullRequest(params);
    // query
    const queryColumns = projectBoard.filter((column) => {
        return "type" in column && column.type === "query";
    }) as ProjectQueryColumn[];
    const queryResponses = new Map<string, GitHubSearchResultItemJSON[]>();
    await Promise.all(
        queryColumns.map((column) => {
            return fetchIssueOrPullRequestWithSearchQuery({
                query: column.query
            }).then((items) => {
                const nonDuplicatedItems = items.filter((item) => {
                    return !projectItems.some((projectItem) => projectItem.url === item.html_url);
                });
                queryResponses.set(column.id, nonDuplicatedItems);
            });
        })
    );
    const convert = (response: GitHubSearchResultItemJSON[]): ProjectBoardData => {
        return {
            lanes: projectBoard.map((projectColumn) => {
                return {
                    id: projectColumn.id,
                    title: projectColumn.title,
                    cards:
                        "type" in projectColumn && projectColumn.type === "query"
                            ? queryResponses.get(projectColumn.id)?.map((response) => {
                                  console.log("response", response);
                                  return {
                                      id: response.id,
                                      title: response.title,
                                      description: response.body,
                                      label: response.repository.url,
                                      metadata: response
                                  };
                              })
                            : response
                                  .filter((response) => {
                                      if ("type" in projectColumn) {
                                          return false;
                                      }
                                      return projectColumn.items.some((item) => {
                                          return item.url === response.html_url;
                                      });
                                  })
                                  .map((response) => {
                                      return {
                                          id: response.id,
                                          title: response.title,
                                          description: response.body,
                                          label: response.repository.url,
                                          metadata: response
                                      };
                                  })
                };
            })
        };
    };
    return convert(responses);
});

export const updateProject = createAsyncThunk("project/updateProject", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as State;
    return updateProjectData(state.projectBoard);
});

export const applyAutoRule = createAsyncThunk("project/applyAutoRule", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as State;
    const doneLane = state.projectContents.lanes.find((lane) => lane.id === "done");
    if (!doneLane) {
        throw new Error("Not found done Lane");
    }
    let doneLaneCardCount = doneLane.cards?.length ?? 0;
    state.projectContents.lanes.forEach((lane: ReactTrello.Lane) => {
        lane.cards?.forEach((card) => {
            const metadata = card.metadata as GitHubSearchResultItemJSON;
            const isClosed = Boolean(metadata.closed_at);
            if (isClosed) {
                thunkAPI.dispatch(
                    slice.actions.moveCard({
                        cardId: card.id!,
                        fromLaneId: lane.id!,
                        index: ++doneLaneCardCount,
                        toLaneId: doneLane.id
                    })
                );
            }
        });
    });
});

export const archiveDone = createAsyncThunk("project/archiveDone", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as State;
    const doneLane = state.projectContents.lanes.find((lane) => lane.id === "done");
    if (!doneLane) {
        throw new Error("Not found done Lane");
    }
    // @ts-expect-error - card any?
    doneLane.cards.forEach((card) => {
        thunkAPI.dispatch(
            slice.actions.deleteCard({
                cardId: card.id!,
                laneId: doneLane.id!
            })
        );
    });
});

const slice = createSlice({
    name: "ProjectBoard",
    initialState,
    reducers: {
        deleteCard(state, action: PayloadAction<{ cardId: string; laneId: string }>) {
            return produce(state, (currentState) => {
                // lane
                const lane: ReactTrello.Lane = currentState.projectContents.lanes.find(
                    (lane) => lane.id === action.payload.laneId
                );
                if (!lane) {
                    return currentState;
                }
                const cardIndex = lane?.cards?.findIndex((card) => card.id === action.payload.cardId);
                if (cardIndex === -1 || cardIndex === undefined) {
                    return currentState;
                }
                const card = lane?.cards?.[cardIndex];
                if (!card) {
                    return currentState;
                }
                // remove card
                lane?.cards?.splice(cardIndex, 1);
                const fromBoard = currentState.projectBoard.find((board) => board.id === action.payload.laneId);
                if (!fromBoard) {
                    console.info("Not found from or to board");
                    return currentState;
                }
                // TODO: probably same html_url toorigin url
                const originalUrl = card.metadata.html_url;
                // No delete when query
                if (isQueryColumn(fromBoard)) {
                    return;
                }
                const itemIndex = fromBoard.items.findIndex((item) => item.url === originalUrl);
                const originalItem = fromBoard.items[itemIndex];
                if (itemIndex === -1 || originalItem === undefined) {
                    return currentState;
                }
                // remove item
                fromBoard.items.splice(itemIndex, 1);
            });
        },
        updateProjectContents(state, action: PayloadAction<ReactTrello.BoardData<CardMetaData>>) {
            return {
                ...state,
                projectContents: action.payload
            };
        },
        moveCard(
            state,
            action: PayloadAction<{ fromLaneId: string; toLaneId: string; cardId: string; index: number }>
        ) {
            return produce(state, (currentState) => {
                // lane
                const lane: ReactTrello.Lane = currentState.projectContents.lanes.find(
                    (lane) => lane.id === action.payload.fromLaneId
                );
                if (!lane) {
                    return currentState;
                }
                const toLane: ReactTrello.Lane = currentState.projectContents.lanes.find(
                    (lane) => lane.id === action.payload.toLaneId
                );
                if (!toLane) {
                    return currentState;
                }
                const cardIndex = lane?.cards?.findIndex((card) => card.id === action.payload.cardId);
                if (cardIndex === -1 || cardIndex === undefined) {
                    return currentState;
                }
                const card = lane?.cards?.[cardIndex];
                if (!card) {
                    return currentState;
                }
                const projectBoard = currentState.projectBoard;
                // $ Update contents
                // remove and add
                lane?.cards?.splice(cardIndex, 1);
                toLane?.cards?.splice(action.payload.index, 1, card);
                // $ Update board
                // board <-> lane
                const fromBoard = projectBoard.find((board) => board.id === lane.id);
                const toBoard = projectBoard.find((board) => board.id === toLane.id);
                if (!isQueryColumn(fromBoard)) {
                    if (!fromBoard || !toBoard) {
                        console.info("Not found from or to board");
                        return currentState;
                    }
                    // TODO: probably same html_url toorigin url
                    const originalUrl = card.metadata.html_url;
                    // No delete when query board

                    const itemIndex = fromBoard.items.findIndex((item) => item.url === originalUrl);
                    const originalItem = fromBoard.items[itemIndex];
                    if (itemIndex === -1 || originalItem === undefined) {
                        return currentState;
                    }
                    // remove from items
                    fromBoard.items.splice(itemIndex, 1);
                    // add to new board
                    if (!isQueryColumn(toBoard)) {
                        toBoard.items.splice(action.payload.index, 1, originalItem);
                    }
                } else {
                    if (!toBoard) {
                        console.info("Not found to board");
                        return currentState;
                    }
                    if (!isProjectItemColumn(toBoard)) {
                        console.info("to board is not item column");
                        return currentState;
                    }
                    // only add to boar when query board
                    // TODO: probably same html_url toorigin url
                    const createNewItem = (metadata: CardMetaData) => {
                        const issuePattern = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pull))\/(?<number>[0-9]+)/;
                        const match = metadata.html_url.match(issuePattern);
                        if (!match) {
                            return null;
                        }
                        const type: "issue" | "pull_request" =
                            match.groups?.type === "issues" ? "issue" : "pull_request";
                        return {
                            type: type,
                            url: metadata.html_url
                        };
                    };
                    // No delete when query board
                    const newItem = createNewItem(card.metadata);
                    if (!newItem) {
                        return;
                    }
                    toBoard.items.splice(action.payload.index, 1, newItem);
                }
            });
        },
        updateProjectBoard(state, action: PayloadAction<ProjectBoard>) {
            return {
                ...state,
                projectBoard: action.payload
            };
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProjectBoard.fulfilled, (state, action) => {
            return {
                ...state,
                projectBoard: action.payload
            };
        });
        builder.addCase(fetchProjectContents.fulfilled, (state, action) => {
            return {
                ...state,
                projectContents: action.payload
            };
        });
        builder.addCase(updateProject.fulfilled, (state, action) => {
            return state;
        });
        builder.addCase(applyAutoRule.fulfilled, (state, action) => {
            return state;
        });
        builder.addCase(archiveDone.fulfilled, (state, action) => {
            return state;
        });
    }
});
export const { updateProjectBoard, moveCard, deleteCard } = slice.actions;
export const store = configureStore({
    reducer: slice.reducer
});
