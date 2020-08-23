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
    deleteCard,
    applyAutoRule,
    archiveDone
} from "./data/State";
import { ProjectBoard } from "./data/DataScheme";
import { Toolbar } from "./toolbar/Toolbar";

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
        store.dispatch(deleteCard(payload));
        store.dispatch(updateProject());
    };
    const onDataChange = (payload: ReactTrello.BoardData<CardMetaData>) => {
        // data change → card move
        // store.dispatch(updateProjectContents(payload));
    };
    const onApplyAutoRule = async () => {
        await store.dispatch(applyAutoRule());
        await store.dispatch(updateProject());
    };
    const onRefresh = async () => {
        await store.dispatch(fetchProjectBoard());
        await store.dispatch(fetchProjectContents());
    };
    const onArchive = async () => {
        await store.dispatch(archiveDone());
        await store.dispatch(updateProject());
    };
    const projectContents = useSelector<State, State["projectContents"]>((state) => state.projectContents);
    return (
        <div className="App">
            <Toolbar onApplyAutoRule={onApplyAutoRule} onRefresh={onRefresh} onArchive={onArchive} />
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
