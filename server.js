import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Moin");
});

app.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
