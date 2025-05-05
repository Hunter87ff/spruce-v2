import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";

import { endpoints } from "./api/endpoints.js";
import { redirect_pages } from "./middlewares/redirect.js";
import { configEnv, client, PORT } from "./config.js";

// extras
import { curlRoute } from "./middlewares/extras.js";
import { checkStatus } from "./utils/extras/serviceMonitor.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize express app
const app = express();
app.set('trust proxy', 1);

//load extensions
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.use(curlRoute);
app.use(redirect_pages);

// security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://*.cashfree.com"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https://lh3.googleusercontent.com/", "https://cdn.discordapp.com/"],
            connectSrc: ["'self'", "https://discord.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://fonts.googleapis.com/"],
            objectSrc: ["'none'"],
            mediaSrc: ["'none'"],
            frameSrc: ["https://*.cashfree.com"],
            formAction: ["https://*.cashfree.com"],
        }
    }
}));


//load routes
app.use("/api", endpoints);

app.use(express.static(path.join(__dirname, '../dist'), { maxAge: '360d' }));
app.use(express.static('../public', { maxAge: '360d' }));


let _status = {
    message: "Service Not Reachable...",
    status: "offline"
};

// Set interval to check every 10 minutes
setInterval( async () => {
    _status = await checkStatus()
}, 1000 * 60 * 10) // every 10 minutes

app.get("/status", async (req, res) => {
    const status = await checkStatus();
    res.json(status);
});



// route react app
app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});



app.listen(PORT, async () => {
    await client.connect();
    console.log("[+] Connected to database");

    await configEnv();
    console.log(`[+] Server is running on port ${PORT}`);
});



