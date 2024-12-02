import express from "express";
import dotenv from 'dotenv';
import axios from "axios";


dotenv.config();

const auth = express.Router();

auth.get("/status", (_, res) => {
  res.send({"auth": "auth loaded and working!!"});
});

auth.get("/login", (_, res) => {
    // redirect to discord login page
    res.redirect(process.env.DISCORD_AUTH_URL);
});


/**
 * Function to exchange code for an access token
 * @param {string} code - The authorization code received from Discord
 * @returns {Promise<string>} - Returns the access token
 */
async function getAccessToken(code) {
    const tokenURL = 'https://discord.com/api/oauth2/token';

    try {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CSECRET,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: process.env.CALLBACK,
        });

        const response = await axios.post(tokenURL, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        // Log the full response if needed
        // console.log('Token Response:', response.data);

        return response.data.access_token; // Access token from Discord
    } catch (error) {
        console.error('Error fetching access token:', error.response?.data || error.message);
        throw new Error('Failed to fetch access token');
    }
}




auth.get("/callback", async (req, res) => {
    let _token;
    try{
        _token = await getAccessToken(req.query.code);
        res.cookie('token', _token, {
            maxAge: 900000000, 
            httpOnly: true, 
            secure: true,
            sameSite: 'Strict'
        });
        
        return res.status(200).json({token: _token});
    }
    catch(err){
        return res.status(500).redirect(process.env.DISCORD_AUTH_URL)
    }
});


auth.get("/logout", (_, res) => {
    res.clearCookie('token');
    res.redirect("/");
});





auth.get("/oauth2", async (req, res) => {
    const token = req.cookies?.token || RegExp('token=(.*?);').exec(req.headers.cookie)[1]
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    
    const _resp = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return res.status(_resp.status).json(_resp.data);
});


export default auth;