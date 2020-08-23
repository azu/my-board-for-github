import React from "react";
import "./Toolbar.css";

export type ToolbarProps = {
    onRefresh: () => void;
    onApplyAutoRule: () => void;
    onArchive: () => void;
};
export const Toolbar = (props: ToolbarProps) => {
    return (
        <div className={"Toolbar"}>
            <button className={"ToolbarButton"} onClick={props.onRefresh}>
                Refresh
            </button>
            <button className={"ToolbarButton"} onClick={props.onApplyAutoRule}>
                Apply Auto Rule
            </button>
            <button className={"ToolbarButton"} onClick={props.onArchive}>
                Archive
            </button>
        </div>
    );
};
