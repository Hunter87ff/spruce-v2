import axios from "axios";
import { creds } from "../config.js";


/**
 * Sends an HTTP request to the Discord API using axios.
 *
 * @param {Request} req - The payload for the request.
 * @param {string} [route="/"] - The API route appended to the base URL.
 * @param {string} [method="GET"] - The HTTP method for the request.
 * @returns {Promise<Object>} A promise that resolves with the axios response.
 */
export async function request(req, route="/users/@me", method="GET", body={}){
    return axios({
        method,
        url: `https://discord.com/api/${route}`,
        headers: {
            Authorization: `Bearer ${req.cookies.token || req.headers.get(Authorization)}`,
            "Content-Type": "application/json"
        },
        data: body
    });
}


/**
 * Makes a request to the Discord API using the specified route and method.
 *
 * @param {string} [route=""] - The API endpoint route (appended to the base URL).
 * @param {string} [method="GET"] - The HTTP request method (e.g., GET, POST, etc.).
 * @returns {Promise} A promise that resolves with the response from the API.
 */
export async function bot_request(route="/users/@me", method="GET"){
    return axios({
        method,
        url: `https://discord.com/api/v10${route}`,
        headers: {
            Authorization: `Bot ${creds.client_token}`,
            "Content-Type": "application/json"
        }
    });
}



// cacehe header shorthand
/**
 * Sets cache-related headers on the response object.
 *
 * @param {Response} res - The response object on which to set the cache header.
 * @param {number} [time=3600] - The maximum age (in seconds) for the cache.
 */
export function cache_header(res, time = 3600) {
    res.setHeader('Cache-Control', `public, max-age=${time}`);
}