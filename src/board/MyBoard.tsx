import React from "react";
import ReactTrelloBoard, { ReactTrello } from "react-trello";
import { GitHubSearchResultItemJSON } from "../queries/github-query";
import { klona } from "klona";
import "./MyBoard.css";

export type CardMetaData = GitHubSearchResultItemJSON;
export type ProjectBoardData = ReactTrello.BoardData<CardMetaData>;
export type MyBoardProps = {
    projectData?: ReactTrello.BoardData<CardMetaData>;
    onProjectDateChange: (projectData: ProjectBoardData) => void;
    onDataChange: (projectData: ProjectBoardData) => void;
    onCardDelete: ({ cardId, laneId }: { cardId: string; laneId: string }) => void;
    onCardMove: (payload: { fromLaneId: string; toLaneId: string; cardId: string; index: number }) => void;
};

export function MyBoard(props: MyBoardProps) {
    if (props.projectData && !props.projectData.lanes) {
        return <p>Loading...</p>;
    }
    const onCardClick = (_cardId: string, metadata: GitHubSearchResultItemJSON) => {
        window.open(metadata.html_url, "_blank");
    };
    const copyProjectDaa = klona(props.projectData);
    if (!copyProjectDaa) {
        return null;
    }
    const onCardDelete = (cardId: string, laneId: string) => {
        props.onCardDelete({ cardId, laneId });
    };
    // also happen in same lanes
    const onCardMoveAcrossLanes = (fromLaneId: string, toLaneId: string, cardId: string, index: number) => {
        props.onCardMove({ cardId, index, toLaneId, fromLaneId });
    };
    const onDataChange = (projectData: any) => {
        console.log("onDataChange", projectData);
        props.onDataChange(projectData as ReactTrello.BoardData<CardMetaData>);
    };
    return (
        <ReactTrelloBoard
            data={copyProjectDaa}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onDataChange={onDataChange}
            onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        />
    );
}
