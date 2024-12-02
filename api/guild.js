import express from "express";

const guild = express.Router();

guild.get("/get", (req, res) => {
  res.send({"message": "Hello from the server!"});
});

export default guild;