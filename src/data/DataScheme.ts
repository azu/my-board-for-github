export type ProjectItem = {
    url: string;
    type: "issue" | "pull_request";
    meta?: object;
};
export type ProjectQueryColumn = {
    id: string;
    title: string;
    type: "query";
    query: string;
};
export type ProjectItemColumn = {
    id: string;
    title: string;
    items: ProjectItem[];
};
export type ProjectColumn = ProjectItemColumn | ProjectQueryColumn;
export type ProjectBoard = ProjectColumn[];
