// return requested avatar image from discord api
import express from "express";
import axios from "axios";

const avatar = express.Router();

avatar.get("/", (req, res) => {
  res.send({"message": "Avatar API is alive!"});
});

avatar.get("/user/:user_id/:hash", async (req, res) => {
    // https://cdn.discordapp.com/avatars/885193210455011369/2b8b94d68a86901c0ba39565c1e428f6.png
    const _user_id = req.params.user_id;
    const _hash = req.params.hash;
    const _url = `https://cdn.discordapp.com/avatars/${_user_id}/${_hash}.png`;
    const _resp = await axios.get(_url, { responseType: 'arraybuffer' });
    if (_resp.status == 200) {
        res.setHeader('Content-Type', 'image/png');
        return res.status(200).send(_resp.data);
    }
});


export default avatar;