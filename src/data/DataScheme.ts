export type ProjectItem = {
    url: string;
    type: "issue" | "pull_request";
    meta?: object;
};
export type ProjectQueryColumn = {
    id: string;
    title: string;
    type: "query";
    // GitHub search query
    // https://docs.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-by-a-user-thats-involved-in-an-issue-or-pull-request
    query: string;
};
export type ProjectItemColumn = {
    id: string;
    title: string;
    items: ProjectItem[];
};
export type ProjectColumn = ProjectItemColumn | ProjectQueryColumn;
export type ProjectBoard = ProjectColumn[];
