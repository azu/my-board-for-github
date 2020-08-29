import produce from "immer";
import { createClient } from "./github-data";

type URL_TYPE = "issue" | "pull_request";
(async function main() {
    const URLPATTERN = /^https:\/\/github.com\/(?<owner>[0-9a-zA-Z-_.]+)\/(?<repo>[0-9a-zA-Z-_.]+)\/(?<type>(issues|pull))\/(?<number>[0-9]+)/;
    const url = window.location.href;
    const match = url.match(URLPATTERN);
    if (!match) {
        return;
    }
    const type: URL_TYPE = match.groups?.type === "issues" ? "issue" : "pull_request";
    const addItemToProject = async () => {
        const client = await createClient();
        const boardData = await client.fetchProjectData();
        const newBoardData = produce(boardData, (currentBoard) => {
            const board = currentBoard.find((item) => item.id === "inbox");
            board?.items.push({
                type,
                url
            });
        });
        await client.updateProjectData(newBoardData);
    };
    const insertElement = document.querySelector(".thread-subscription-status");
    const addItemButton = document.createElement("button");
    addItemButton.textContent = "Add to My Board";
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
