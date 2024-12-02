import express from "express";
import guild from "./api/guild.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use("/api/guild", guild);
app.use(express.static(path.join(__dirname, 'dist')));


app.get("/api/get", (req, res) => {
  res.send({"message": "Hello from the server!"});
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});