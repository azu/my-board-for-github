export type ProjectItem = {
    url: string;
    type: "issue" | "pull_request";
    meta?: object;
};
export type ProjectColumn = {
    id: string;
    title: string;
    items: ProjectItem[];
};
export type ProjectBoard = ProjectColumn[];
