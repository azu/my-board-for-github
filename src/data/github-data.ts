import { createKoreFile, createGitHubAdaptor } from "korefile";
import { ProjectBoard } from "./DataScheme";
import { env } from "../env";

const koreFile = createKoreFile({
    adaptor: createGitHubAdaptor({
        owner: env.owner,
        repo: env.repo,
        ref: "heads/" + env.branch,
        token: env.token
    })
});
export const fetchProjectData = async (): Promise<ProjectBoard> => {
    const content = await koreFile.readFile("project.json");
    return JSON.parse(content);
};

export const updateProjectData = async (projectData: ProjectBoard) => {
    return koreFile.writeFile("project.json", JSON.stringify(projectData, null, 4));
};
