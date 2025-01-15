import express from "express";
import guild from "./api/guild.js";
import auth from "./api/auth.js";
import path from "path";
import { fileURLToPath } from 'url';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import {configDotenv } from "dotenv";
import {redirect_pages} from "./middlewares/redirect.js";
import { MongoClient, ServerApiVersion } from 'mongodb';
configDotenv();


// fetch data from mongo db and set it to env
async function setEnv() {
    const MongoUri = process.env.MONGO_URI;
    const client = new MongoClient(MongoUri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    try {
        await client.connect();
        let db = client.db("configdb");
        let collection = db.collection("configdbc");
        let _data = await collection.findOne({ config_id: 30 });
        for (let key in _data) {
            process.env[key.toUpperCase()] = _data[key];
        }
    } finally {
        await client.close();
    }
    console.log("Env Configured!!");
}
setEnv().catch(console.dir);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// initialize express app
const app = express();
app.set('trust proxy', 1);


//load extensions
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.use(redirect_pages);


// security headers
app.use(helmet({
    contentSecurityPolicy: { 
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            imgSrc: ["'self'", "data:", "https://lh3.googleusercontent.com/", "https://cdn.discordapp.com/"],
            connectSrc: ["'self'"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://fonts.googleapis.com/"],
            objectSrc: ["'none'"],
            mediaSrc: ["'none'"],
            frameSrc: ["'none'"],
        }
    }
}));


//load routes
app.use("/api/guild", guild);
app.use("/api/auth", auth);
app.use(express.static(path.join(__dirname, '../dist'), { maxAge: '30d' }));
app.use(express.static('../public', { maxAge: '30d' }));



app.get("/status", async (req, res) => {
    res.send({
        "message": "alive!!",
    });
});




// route react app
app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    res.sendFile(path.join(__dirname, '../dist', 'index.html'));
  });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});



