import express from "express";
import guild from "./api/guild.js";
import auth from "./api/auth.js";
import path from "path";
import { fileURLToPath } from 'url';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// initialize express app
const app = express();


//losd routes
app.use("/api/guild", guild);
app.use("/api/auth", auth);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public', { maxAge: '1d' }));


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1000, // Limit each IP to 1000 requests per windowMs
});

//load extensions
app.use(express.json());
app.use(compression());
app.use(limiter);
app.use(helmet());
app.use(cookieParser());


app.get("/status", async (req, res) => {
    res.cookie('status', 'alive', { maxAge: 900000000, httpOnly: true });
    res.send({
        "message": "alive!!",
        "head": req.headers.cookie
    });
});




// route react app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});