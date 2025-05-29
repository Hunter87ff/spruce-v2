import process from "process";
import { configDotenv } from "dotenv";
import { MongoClient, ServerApiVersion } from 'mongodb';
process.env.ENVIRONMENT = process.env.ENVIRONMENT || "development";
configDotenv();

export const PORT = process.env.PORT || 3001;
export const api = "https://discord.com/api";


export const creds = {
    config_id: 87,
    mongo_uri: process.env.MONGO_URI,
    client_id: process.env.CLIENT_ID || 931202912888164474,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    client_token: process.env.CLIENT_TOKEN,
    gh_token: process.env.GH_TOKEN,
}


export const extras = {
    INVITE_URL: `https://discord.com/oauth2/authorize?client_id=${creds.client_id}&permissions=8&scope=bot`
}


export const client = new MongoClient(process.env.MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export const db = client.db("sprucedb");


// configure environment variables
export const configEnv = async () => {
    if (creds.config_id) {
        const _config_data = await db.collection("configs").findOne({ config_id: creds.config_id });
        if (!_config_data) {
            console.log("File : server/util/db.js-21 : Config data not found in database");
            process.exit(1);
        }

        const { client_id, client_secret, redirect_uri, client_token } = _config_data;
        creds.client_id = client_id;
        creds.client_secret = client_secret;
        creds.redirect_uri = redirect_uri;
        creds.client_token = client_token;
        console.log("Environment Configured!!");
        return true;
    }
    else {
        console.log("File : server/util/db.js-21 : Config data not found in database");
        process.exit(1);
    }

}


