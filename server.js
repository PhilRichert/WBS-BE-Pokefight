import "dotenv/config";
import express from "express";
import cors from "cors";
import pokemonRoutes from "./routes/pokemonRoutes.js"

const server = express();
const port = 8080;

// use cors
server.use(cors());

server.use(express.json());

// use Router
server.use('/pokemon', pokemonRoutes)

// alternativ 404
server.get("*", (req, res) => {
  res.send("Moin hier gibt es nichts zu sehen");
});

server.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
