import React from "react";
import ReactTrelloBoard, { ReactTrello } from "react-trello";
import { GitHubSearchResultItemJSON } from "../queries/github-query";
import { klona } from "klona";
import "./MyBoard.css";
import { IssueClosedIcon, GitPullRequestIcon, IssueOpenedIcon } from "@primer/octicons-react";
import ReactMarkdown from "react-markdown";

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
    const copyProjectData = klona(props.projectData);
    if (!copyProjectData) {
        return null;
    }
    copyProjectData?.lanes.forEach((lane: ReactTrello.Lane) => {
        lane.cards?.forEach((card) => {
            const status = (card.metadata as CardMetaData).state;
            card.title = (() => {
                if (status === "closed") {
                    return (
                        <>
                            <IssueClosedIcon size={16} className={"MyBoardIcon IssueClosedIcon"} />
                            {card.title}
                        </>
                    );
                } else if (status === "merged") {
                    return (
                        <>
                            <GitPullRequestIcon size={16} className={"MyBoardIcon GitPullRequestIcon"} />
                            {card.title}
                        </>
                    );
                } else if (status === "open") {
                    return (
                        <>
                            <IssueOpenedIcon size={16} className={"MyBoardIcon IssueOpenedIcon"} />
                            {card.title}
                        </>
                    );
                }
                return card.title;
            })() as string;
            card.description = ((
                <ReactMarkdown className={"MyBoardDescription"} skipHtml={true} source={card.description} />
            ) as any) as string;
        });
    });
    const onCardDelete = (cardId: string, laneId: string) => {
        props.onCardDelete({ cardId, laneId });
    };
    // also happen in same lanes
    const onCardMoveAcrossLanes = (fromLaneId: string, toLaneId: string, cardId: string, index: number) => {
        props.onCardMove({ cardId, index, toLaneId, fromLaneId });
    };
    const onDataChange = (projectData: any) => {
        props.onDataChange(projectData as ReactTrello.BoardData<CardMetaData>);
    };
    return (
        <ReactTrelloBoard
            data={copyProjectData}
            onCardClick={onCardClick}
            onCardDelete={onCardDelete}
            onDataChange={onDataChange}
            onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        />
    );
}
