// stateの型定義
import { ProjectBoard } from "./DataScheme";
import { configureStore, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    fetchIssueOrPullRequest,
    fetchIssueOrPullRequestParam,
    GitHubSearchResultItemJSON
} from "../queries/github-query";
import { ProjectBoardData } from "../board/MyBoard";

export type State = {
    projectBoard: ProjectBoard;
    projectContents: ProjectBoardData;
};
const initialState: State = {
    projectBoard: [],
    projectContents: {}
};
export const fetchProjectBoard = createAsyncThunk("project/fetchProjectBoard", async () => {
    return Promise.resolve(require("./debug-data.json"));
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
const slice = createSlice({
    name: "ProjectBoard",
    initialState,
    reducers: {
        cardAdd() {},
        cardDelete() {},
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
    }
});
export const { cardAdd, cardDelete, updateProjectBoard } = slice.actions;
export const store = configureStore({
    reducer: slice.reducer
});
