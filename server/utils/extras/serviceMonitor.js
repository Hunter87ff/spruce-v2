import {creds} from "../../config.js";
const _token = creds.gh_token || process.env.GH_TOKEN;

const _options = {
        method: "POST",
        headers: {
            "Authorization": `token ${_token}`,
            "Accept": "application/vnd.github.v3+json"
        },
        body : JSON.stringify({"ref": "main"})
}


async function startWorkflow(owner="hunter87ff", repo="spruce", workflow_id="py_application.yml"){
    const _url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow_id}/dispatches`;
    const _response = await fetch(_url, _options);
    if (_response.ok) {
        return {
            message: "Service Restarting...",
            status: "idle"
        }
    } else {
        return {
            message: "Failed to start service.",
            status: "error"
        }
    }
}

// Check the status of the workflow
export async function checkStatus(owner="hunter87ff", repo="spruce", workflow_id="py_application.yml"){
    console.log(_token)
    const _url = `https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflow_id}/runs?branch=main`
    const _response = await fetch(_url)
    const _data = await _response.json()

    if(_data.workflow_runs.length === 0){
        return {
            message: "No workflow runs found.",
            status: "offline"
        }
    }
    const _status = _data.workflow_runs[0].status

    if(_status != "in_progress"){
        const restarting = await startWorkflow();
        return restarting;
    }
    else{
        return {
            message: "Service is running...",
            status: "online"
        }
    }
}