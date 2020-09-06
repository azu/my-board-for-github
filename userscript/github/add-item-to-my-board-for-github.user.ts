import produce from "immer";
import { kvsEnvStorage } from "@kvs/env";
import { createClient } from "./github-data";
import { ProjectBoard, ProjectItemColumn } from "../../src/data/DataScheme";

type URL_TYPE = "issue" | "pull_request";
type UnixTimeStamp = number;
type Scheme = {
    lastBoard: {
        data?: ProjectBoard;
        timeStamp: UnixTimeStamp; // unix time
    };
};
// 10min
const cacheExpireTIme = 10 * 60 * 1000;
(async function main() {
    const storage = await kvsEnvStorage<Scheme>({
        name: "add-item-to-my-board-for-github",
        version: 1,
        async upgrade({ kvs, oldVersion, newVersion }) {
            // Initial Data
            if (oldVersion < 1) {
                await kvs.set("lastBoard", {
                    data: undefined,
                    timeStamp: Date.now() - 1000 * 3600
                });
            }
        }
    });
    let cachedBoard = await storage.get("lastBoard");
    const limitTimeStamp = Date.now() - cacheExpireTIme;
    const updateCache = async () => {
        const client = await createClient();
        const projectData = await client.fetchProjectData();
        const cachedBoard = {
            data: projectData,
            timeStamp: Date.now()
        };
        await storage.set("lastBoard", cachedBoard);
        return cachedBoard;
    };
    // Expire cache
    if (!cachedBoard || (cachedBoard && cachedBoard.timeStamp < limitTimeStamp)) {
        cachedBoard = await updateCache();
    }
    const URLPATTERN = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pull))\/(?<number>[0-9]+)/;
    const url = window.location.href;
    const match = url.match(URLPATTERN);
    if (!match) {
        return;
    }
    // ignore #
    const currentURL = match[0];
    const hasAddedURL = (board: ProjectBoard, url: string): boolean => {
        const defaultColumns = board.filter((column) => {
            return column.type === "default";
        }) as ProjectItemColumn[];
        return defaultColumns.some((column) => {
            return column.items.some((item) => {
                return item.url === url;
            });
        });
    };
    const type: URL_TYPE = match.groups?.type === "issues" ? "issue" : "pull_request";
    const addItemToProject = async () => {
        const client = await createClient();
        const boardData = await client.fetchProjectData();
        const newBoardData = produce(boardData, (currentBoard) => {
            const board = currentBoard.find((item) => item.id === "inbox");
            if (board && board.type !== "default") {
                return;
            }
            board?.items.push({
                type,
                url
            });
        });
        await client.updateProjectData(newBoardData);
        cachedBoard = await updateCache();
    };
    const insertElement = document.querySelector(".thread-subscription-status");
    const addItemButton = document.createElement("button");
    if (cachedBoard && cachedBoard.data && hasAddedURL(cachedBoard.data, currentURL)) {
        addItemButton.textContent = "Added";
        addItemButton.disabled = true;
    } else {
        addItemButton.textContent = "Add to My Board";
    }
    addItemButton.className = "btn btn-block btn-sm thread-subscribe-button";
    addItemButton.addEventListener("click", () => {
        addItemButton.textContent = "Progressing...";
        addItemButton.disabled = true;
        addItemToProject()
            .then(() => {
                addItemButton.textContent = "Added";
            })
            .catch((error) => {
                console.error(error);
                addItemButton.textContent = "Error: Retry";
                addItemButton.disabled = false;
            });
    });
    insertElement?.append(addItemButton);
})();
