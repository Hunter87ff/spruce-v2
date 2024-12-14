import express from "express";
import dotenv from 'dotenv';
import axios from "axios";
import {getAuthUrl, getCallbackUrl} from "./utils.js";

dotenv.config();

const auth = express.Router();

auth.get("/status", (_, res) => {
  res.send({"auth": "auth loaded and working!!"});
});

auth.get("/login", (_, res) => {
    // redirect to discord login page
    res.redirect(getAuthUrl(_));
});


/**
 * Function to exchange code for an access token
 * @param {string} code - The authorization code received from Discord
 * @returns {Promise<string>} - Returns the access token
 */
async function getAccessToken(req) {
    const tokenURL = 'https://discord.com/api/oauth2/token';

    try {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: req.query.code,
            redirect_uri: req.protocol + '://' + req.headers.host + "/api/auth/callback",
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
        _token = await getAccessToken(req);
        res.cookie('token', _token, {
            maxAge: 900000000, 
            httpOnly: true, 
            secure: true,
            sameSite: 'Strict'
        });
        return res.status(200).redirect("/dashboard");
        // return res.status(200).json({token: _token});
    }
    catch(err){
        return res.status(500).redirect("/login");
    }
});


auth.get("/logout", (_, res) => {
    res.clearCookie('token');
    res.redirect("/");
});





auth.get("/oauth2", async (req, res) => {
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }
    
    const _resp = await axios.get("https://discord.com/api/users/@me", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if(_resp.status == 200){
        res.cookie('token', req.cookies.token, {
            maxAge: 900000000, 
            httpOnly: true, 
            secure: true,
            sameSite: 'Strict'
        });
    }
    return res.status(_resp.status).json(_resp.data);
});


export default auth;