import { createKoreFile, createGitHubAdaptor } from "korefile";
import { ProjectBoard } from "./DataScheme";
// @ts-expect-error: no types
import promiseRetry from "promise-retry";
import { env } from "../env";

const koreFile = createKoreFile({
    adaptor: createGitHubAdaptor({
        owner: env.owner,
        repo: env.repo,
        ref: "heads/" + env.branch,
        token: env.token ?? undefined
    })
});

export const fetchProjectData = async (): Promise<ProjectBoard> => {
    const content = await koreFile.readFile("project.json");
    return JSON.parse(content);
};

const concurrentOne = <T extends any[], R>(fn: (...args: T) => Promise<R>) => {
    let isLocking = false;
    let waitTask: (() => Promise<R>) | null = null;
    return async (...args: T) => {
        if (isLocking) {
            waitTask = async () => {
                return fn(...args);
            };
            return;
        }
        try {
            isLocking = true;
            await fn(...args);
            if (waitTask) {
                await waitTask();
            }
        } finally {
            isLocking = false;
            waitTask = null;
        }
    };
};

export const updateProjectData = concurrentOne(
    async (projectData: ProjectBoard): Promise<void> => {
        if (env.dryRun) {
            console.log("dryRun mode - no update project data");
            return;
        }
        return promiseRetry((retry: (err: Error, opts: {}) => Promise<void>, number: number) => {
            return koreFile.writeFile("project.json", JSON.stringify(projectData, null, 4)).catch((error) => {
                console.log("Retry count" + number, "reason", error);
                return retry(error, {
                    minTimeout: 5 * 1000
                });
            });
        });
    }
);
