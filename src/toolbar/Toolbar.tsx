import React from "react";
import "./Toolbar.css";
import { SyncIcon, RocketIcon, ArchiveIcon, DatabaseIcon, MarkGithubIcon } from "@primer/octicons-react";
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
            <div className={"ToolbarMenu"}>
                <button
                    className={"ToolbarButton"}
                    onClick={props.onRefresh}
                    title={"Reload metadata and refresh items"}
                >
                    <SyncIcon size={16} className={"ToolbarButtonIcon"} />
                    Refresh
                </button>
                <button
                    className={"ToolbarButton"}
                    onClick={props.onApplyAutoRule}
                    title={"Apply automation. Move closed issue to done column."}
                >
                    <RocketIcon size={16} className={"ToolbarButtonIcon"} />
                    Format task
                </button>
                <button
                    className={"ToolbarButton"}
                    onClick={props.onArchive}
                    title={"Archive all cards that are in done"}
                >
                    <ArchiveIcon size={16} className={"ToolbarButtonIcon"} />
                    Archive
                </button>
                <a
                    className={"ToolbarButton"}
                    href={dbURL}
                    title={"See your database"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <DatabaseIcon size={16} className={"ToolbarButtonIcon"} />
                </a>
            </div>
            <div className={"ToolbarMetaMenu"}>
                <a
                    className={"ToolbarButton"}
                    href={"https://github.com/azu/my-board-data"}
                    title={"Source Code"}
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    <MarkGithubIcon size={16} className={"ToolbarButtonIcon"} />
                </a>
            </div>
        </div>
    );
};
