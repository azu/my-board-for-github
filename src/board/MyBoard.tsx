import React from "react";
import ReactTrello, { BoardData, DraggableCard } from "react-trello";
import { GitHubSearchResultItemJSON } from "../queries/github-query";
import { klona } from "klona";

export type CardMetaData = {};
export type ProjectBoardData = BoardData<CardMetaData>;
export type MyBoardProps = {
    projectData?: BoardData<CardMetaData>;
    onProjectDateChange: (projectData: ProjectBoardData) => void;
};

export function MyBoard(props: MyBoardProps) {
    if (props.projectData && !props.projectData.lanes) {
        return <p>Loading...</p>;
    }
    const onCardClick = (_cardId: string, metadata: GitHubSearchResultItemJSON) => {
        window.open(metadata.html_url, "_blank");
    };
    const copyProjectDaa = klona(props.projectData);
    const onDataChange = (projectData: ProjectBoardData) => {
        props.onProjectDateChange(projectData);
    };
    const onCardAdd = (card: DraggableCard, laneId: string) => {
        console.log(card, laneId);
    };
    const onCardDelete = (card: DraggableCard, laneId: string) => {
        console.log(card, laneId);
    };
    return (
        <ReactTrello
            data={copyProjectDaa}
            onDataChange={onDataChange}
            onCardAdd={onCardAdd}
            onCardDelete={onCardDelete}
            onCardClick={onCardClick}
        />
    );
}
