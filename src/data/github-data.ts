import { createKoreFile, createGitHubAdaptor } from "korefile";
import { ProjectBoard } from "./DataScheme";

const owner = process.env.REACT_APP_GITHUB_OWNER;
const repo = process.env.REACT_APP_GITHUB_REPO;
const branch = process.env.REACT_APP_GITHUB_BRANCH;
const token = process.env.REACT_APP_GITHUB_TOKEN;
if (!owner) {
    throw new Error("require process.env.REACT_APP_GITHUB_OWNER=xxx");
}
if (!repo) {
    throw new Error("require process.env.REACT_APP_GITHUB_REPO=xxx");
}
if (!branch) {
    throw new Error("require process.env.REACT_APP_GITHUB_BRANCH=xxx");
}
if (!token) {
    throw new Error("require process.env.REACT_APP_GITHUB_TOKEN");
}
const koreFile = createKoreFile({
    adaptor: createGitHubAdaptor({
        owner: owner,
        repo: repo,
        ref: "heads/" + branch,
        token: token
    })
});
export const fetchProjectData = async (): Promise<ProjectBoard> => {
    const content = await koreFile.readFile("project.json");
    return JSON.parse(content);
};

export const updateProjectData = async (projectData: ProjectBoard) => {
    return koreFile.writeFile("project.json", JSON.stringify(projectData, null, 4));
};
