import React from "react";
import "./Toolbar.css";
import { ArchiveIcon, DatabaseIcon } from "@primer/octicons-react";
import { env } from "../env";

export type ToolbarProps = {
    onRefresh: () => void;
    onApplyAutoRule: () => void;
    onArchive: () => void;
};
export const Toolbar = (props: ToolbarProps) => {
    const dbURL = `https://github.com/${env.owner}/${env.repo}`;
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
                <ArchiveIcon size={16} />
                Archive
            </button>
            <a
                className={"ToolbarButton"}
                href={dbURL}
                title={"See your database"}
                target={"_blank"}
                rel="noopener noreferrer"
            >
                <DatabaseIcon size={16} />
            </a>
        </div>
    );
};
