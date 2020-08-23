const searchParams = new URL(window.location.href).searchParams;
const owner = process.env.REACT_APP_GITHUB_OWNER ?? searchParams.get("owner");
const repo = process.env.REACT_APP_GITHUB_REPO ?? searchParams.get("repo");
const branch = process.env.REACT_APP_GITHUB_BRANCH ?? searchParams.get("branch");
const dryRun = process.env.REACT_APP_DRY_RUN ?? searchParams.get("dryrun") ?? false;
const token = process.env.REACT_APP_GITHUB_TOKEN ?? searchParams.get("token");
const isDefine = (str: unknown): str is string => {
    return typeof str === "string" && str.length > 0;
};
if (!isDefine(owner)) {
    throw new Error("require process.env.REACT_APP_GITHUB_OWNER=xxx");
}
if (!isDefine(repo)) {
    throw new Error("require process.env.REACT_APP_GITHUB_REPO=xxx");
}
if (!isDefine(branch)) {
    throw new Error("require process.env.REACT_APP_GITHUB_BRANCH=xxx");
}
if (!isDefine(token) && !dryRun) {
    throw new Error("require process.env.REACT_APP_GITHUB_TOKEN");
}
export const env = {
    owner,
    repo,
    branch,
    token,
    dryRun
};
