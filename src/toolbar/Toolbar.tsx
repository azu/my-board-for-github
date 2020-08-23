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
            <button className={"ToolbarButton"} onClick={props.onRefresh} title={"Reload metadata and refresh items"}>
                Refresh
            </button>
            <button
                className={"ToolbarButton"}
                onClick={props.onApplyAutoRule}
                title={"Apply automation. Move closed issue to done column."}
            >
                Apply Auto Rule
            </button>
            <button className={"ToolbarButton"} onClick={props.onArchive} title={"Archive all cards that are in done"}>
                Archive
            </button>
        </div>
    );
};
