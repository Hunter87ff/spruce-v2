import { curlData } from "../utils/extras/curl.js";


/**
 * @description curl route for curl interface
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export async function curlRoute(req, res, next) {
    try {
        if (req.headers["user-agent"] && req.headers["user-agent"].includes("curl")) {
            return res.send(curlData)    
        };
    } catch (error) {
        next();
    }
    next()
}