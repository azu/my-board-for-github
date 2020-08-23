import { createKoreFile, createGitHubAdaptor } from "korefile";
import { ProjectBoard } from "../../src/data/DataScheme";

declare var GM_getValue: (key: string, defaultValu?: string) => Promise<string>;
export const createClient = async () => {
    const owner = await GM_getValue("owner");
    const repo = await GM_getValue("repo");
    const branch = await GM_getValue("branch");
    const token = await GM_getValue("token");
    const koreFile = createKoreFile({
        adaptor: createGitHubAdaptor({
            owner: owner,
            repo: repo,
            ref: "heads/" + branch,
            token: token
        })
    });
    const fetchProjectData = async (): Promise<ProjectBoard> => {
        const content = await koreFile.readFile("project.json");
        return JSON.parse(content);
    };

    const updateProjectData = async (projectData: ProjectBoard) => {
        return koreFile.writeFile("project.json", JSON.stringify(projectData, null, 4));
    };
    return {
        fetchProjectData,
        updateProjectData
    };
};
