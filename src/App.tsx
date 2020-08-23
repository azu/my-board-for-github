import React, { useEffect } from "react";
import "./App.css";
import { CardMetaData, MyBoard } from "./board/MyBoard";
import { useSelector } from "react-redux";
import {
    fetchProjectBoard,
    fetchProjectContents,
    State,
    store,
    updateProjectBoard,
    moveCard,
    updateProject,
    deleteCard
} from "./data/State";
import { ProjectBoard } from "./data/DataScheme";

function App() {
    useEffect(() => {
        store.dispatch(fetchProjectBoard()).then(() => {
            store.dispatch(fetchProjectContents());
        });
    }, []);
    const onProjectDateChange = (newProjectData: { lanes: ProjectBoard }) => {
        store.dispatch(updateProjectBoard(newProjectData.lanes));
    };
    const onCardMove = (payload: { fromLaneId: string; toLaneId: string; cardId: string; index: number }) => {
        store.dispatch(moveCard(payload));
        store.dispatch(updateProject());
    };
    const onCardDelete = (payload: { cardId: string; laneId: string }) => {
        console.log("onCardDelete", payload);
        store.dispatch(deleteCard(payload));
        store.dispatch(updateProject());
    };
    const onDataChange = (payload: ReactTrello.BoardData<CardMetaData>) => {
        // data change → card move
        // store.dispatch(updateProjectContents(payload));
    };
    const projectContents = useSelector<State, State["projectContents"]>((state) => state.projectContents);
    return (
        <div className="App">
            <MyBoard
                projectData={projectContents}
                onProjectDateChange={onProjectDateChange}
                onCardDelete={onCardDelete}
                onCardMove={onCardMove}
                onDataChange={onDataChange}
            />
        </div>
    );
}

export default App;
