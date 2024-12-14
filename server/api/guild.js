import express from "express";
import axios from "axios";
import rateLimit from "express-rate-limit";


const guild = express.Router();

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 10 minutes
    max: 1000, // Limit each IP to 1000 requests per windowMs
});

//  adding limiter to all requests
guild.use(limiter);


guild.get("/", (req, res) => {
  res.send({"message": "Guild API is alive!"});
});

guild.get("/guilds", async (req, res) => {
    let _guilds = []
    let _token = req.cookies.token;
    if (!_token) {
        return res.status(401).json({"error": "Unauthorized"});
    }
    const _resp = await axios.get("https://discord.com/api/users/@me/guilds", {
        headers: {
            'Authorization': `Bearer ${_token}`
        }
    });
    if (_resp.status == 200) {
        _guilds = _resp.data;
        return res.status(200).json(_guilds);
    }
    return res.status(500).json({"error": "Failed to fetch guilds"});
});



export default guild;