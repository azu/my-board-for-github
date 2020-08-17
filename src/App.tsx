import React, { useEffect } from "react";
import "./App.css";
import { MyBoard } from "./board/MyBoard";
import { useSelector } from "react-redux";
import { fetchProjectBoard, fetchProjectContents, State, store, updateProjectBoard } from "./data/State";
import { ProjectBoard } from "./data/DataScheme";

function App() {
    useEffect(() => {
        store.dispatch(fetchProjectBoard()).then(() => {
            store.dispatch(fetchProjectContents());
        });
    }, []);
    const onProjectDateChange = (newProjectData: { lanes: ProjectBoard }) => {
        console.log("newProjectData", newProjectData);
        store.dispatch(updateProjectBoard(newProjectData.lanes));
    };

    const projectContents = useSelector<State>((state) => state.projectContents);
    console.log("projectContents", projectContents);
    return (
        <div className="App">
            <MyBoard projectData={projectContents} onProjectDateChange={onProjectDateChange} />
        </div>
    );
}

export default App;
