import axios from 'axios'; 
import * as config from '../config.js';

export async function fetch_api(route, method="GET", data=null) {
    
    let headers = {
        'Content-Type': 'application/json',
        'Cookie': document.cookie.toString() || "x",
    }
    if(localStorage.getItem("token")) {
        headers['Authorization'] = `${localStorage.getItem("token") || "x"}`;
    }
    let response = await axios({
        method: method,
        url: `${config.API_ROUTE}${route.replace(config.API_ROUTE, "")}`,
        data: data,
        headers: headers
    });
    return response;
}