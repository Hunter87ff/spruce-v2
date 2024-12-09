import express from "express";
import axios from "axios";
import {getCookie} from "./utils.js";

const guild = express.Router();

guild.get("/", (req, res) => {
  res.send({"message": "Guild API is alive!"});
});

guild.get("/guilds", async (req, res) => {
    let _guilds = []
    let _token = getCookie(req, "token");
    if (!_token) {
        return res.status(401).json({"error": "Unauthorized"});
    }
    const _resp = await axios.get("https://discord.com/api/users/@me/guilds", {
        headers: {
            'Authorization': `Bearer ${getCookie(req, "token")}`
        }
    });
    if (_resp.status == 200) {
        _guilds = _resp.data;
        return res.status(200).json(_guilds);
    }
    return res.status(500).json({"error": "Failed to fetch guilds"});
});



export default guild;