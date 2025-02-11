import express from "express";
import axios from "axios";
import rateLimit from "express-rate-limit";
import { api } from "../config.js";

const guild = express.Router();

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 10 minutes
    max: 1000, // Limit each IP to 1000 requests per windowMs
});

//  adding limiter to all requests
guild.use(limiter);


guild.get("/", async (req, res) => {
    try {
        let _token = req.cookies.token;
        if (!_token) {
            return res.status(401).json({ "error": "Unauthorized" });
        }
        const _resp = await axios.get(`${api}/users/@me/guilds`, {
            headers: {
                'Authorization': `Bearer ${_token}`
            }
        });
        res.setHeader('Cache-Control', 'public, max-age=3600');
        if (_resp.status == 200) {
            ;
            return res.status(200).json(_resp.data);
        }
    }
    catch (err) {
        return res.status(500).json({ "error": "Failed to fetch guilds" });
    }
});




export default guild;