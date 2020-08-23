import produce from "immer";
import { ProjectBoard } from "./DataScheme";
import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    fetchIssueOrPullRequest,
    fetchIssueOrPullRequestParam,
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
export const fetchProjectBoard = createAsyncThunk("project/fetchProjectBoard", async () => {
    return fetchProjectData();
});

export const fetchProjectContents = createAsyncThunk("project/fetchProjectContents", async (_, thunkAPI) => {
    const state = thunkAPI.getState() as State;
    const projectBoard = state.projectBoard;
    const projectItems = projectBoard.flatMap((projectColumn) => {
        return projectColumn.items;
    });
    const params = projectItems.flatMap((projectItem) => {
        const issuePattern = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pulls))\/(?<number>[0-9]+)/;
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
    const convert = (response: GitHubSearchResultItemJSON[]): ProjectBoardData => {
        return {
            lanes: projectBoard.map((projectColumn) => {
                return {
                    id: projectColumn.id,
                    title: projectColumn.title,
                    cards: response
                        .filter((response) => {
                            return projectColumn.items.some((item) => {
                                return item.url === response.html_url;
                            });
                        })
                        .map((response) => {
                            return {
                                id: response.id,
                                title: response.title,
                                description: response.body?.slice(0, 50),
                                label: response.labels.map((label) => label.name).join(","),
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
    console.log("state", state);
    return updateProjectData(state.projectBoard);
});

const slice = createSlice({
    name: "ProjectBoard",
    initialState,
    reducers: {
        cardAdd() {},
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
                if (!fromBoard || !toBoard) {
                    console.info("Not found from or to board");
                    return currentState;
                }
                // TODO: probably same html_url toorigin url
                const originalUrl = card.metadata.html_url;
                const itemIndex = fromBoard.items.findIndex((item) => item.url === originalUrl);
                const originalItem = fromBoard.items[itemIndex];
                console.log("card", itemIndex, originalItem);
                if (itemIndex === -1 || originalItem === undefined) {
                    return currentState;
                }
                // remove from items
                fromBoard.items.splice(itemIndex, 1);
                // add to new board
                toBoard.items.splice(action.payload.index, 1, originalItem);
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
    }
});
export const { updateProjectBoard, moveCard, deleteCard } = slice.actions;
export const store = configureStore({
    reducer: slice.reducer
});
