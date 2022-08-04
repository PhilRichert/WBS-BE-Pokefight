import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import pokedex from "./pokedex.json" assert {type: "json"};

const app = express();
const port = 8080;

app.use(cors());

app.get("/pokemon/:id/:info", (req, res) => {
  const id = parseInt(req.params.id)
  const info = req.params.info
  const pokemonById = pokedex.find(pokemon => pokemon.id===id)
  res.send(pokemonById[info]);
});

// find pokemon by id
app.get("/pokemon/:id", (req, res) => {
  const pokemonById = pokedex.find(pokemon => pokemon.id===parseInt(req.params.id))
  res.send(pokemonById)
});

// all pokemon
app.get("/pokemon", (req, res) => {
  res.send(pokedex);
});

// alternativ 404
app.get("*", (req, res) => {
  res.send("Moin hier gibt es nichts zu sehen");
});

app.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
