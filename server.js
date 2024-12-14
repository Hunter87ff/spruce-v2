import express from "express";
import guild from "./api/guild.js";
import auth from "./api/auth.js";
import path from "path";
import { fileURLToPath } from 'url';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import compression from "compression";
import rateLimit from "express-rate-limit";
import {configDotenv } from "dotenv";
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
    // console.log(process.env)
}
setEnv().catch(console.dir);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// initialize express app
const app = express();
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 1000, // Limit each IP to 1000 requests per windowMs
});


//load extensions
app.use(cookieParser());
app.use(express.json());
app.use(compression());
app.use(limiter);
app.use(helmet());


//load routes
app.use("/api/guild", guild);
app.use("/api/auth", auth);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('public', { maxAge: '1d' }));



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



