import express from "express";
import auth from "./auth.js"
import guild from "./guild.js"

import rateLimit from "express-rate-limit";

// initialize express app
const endpoints = express.Router();


// add some headers
endpoints.use((req, res, next) => {
    res.setHeader('timestamp', Date.now());
    next();
});


// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 5 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: { 
        status: 429,
        message: "Too many requests, please try again later"
    },
});
endpoints.use(limiter);


//load endpoints
endpoints.use("/auth", auth);
endpoints.use("/guilds", guild);


// root endpoint
endpoints.get('/', async (req, res) => {
    return res.json({
        status: 'API endpoints Working'
    });
});

export { endpoints };