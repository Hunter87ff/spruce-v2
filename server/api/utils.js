import { creds } from "../config.js";



/**
 * Generates the Discord OAuth2 authorization URL.
 *
 * @param {Object} req - The request object.
 * @param {string} req.protocol - The protocol used (http or https).
 * @param {Object} req.headers - The headers of the request.
 * @param {string} req.headers.host - The host of the request.
 * @param {string} req.originalUrl - The original URL of the request.
 * @returns {string} The generated authorization URL.
 */
export function getAuthUrl(req) {
    return "https://discord.com/api/oauth2/authorize?client_id=" + creds.client_id + "&redirect_uri=" + encodeURI(req.protocol + '://' + req.headers.host + "/api/auth/callback") + "&response_type=code&scope=identify%20email%20guilds";
}

export function getCallbackUrl(req) {
    return req.protocol + '://' + req.headers.host + "/api/auth/callback";
}

export function getAvatarUrl(user) {
    return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
}