import "dotenv/config"

import mongoose from "mongoose"
import Result from "../modals/result"

mongoose.connect(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error(err);
});

const game_results = async (req, res) => {
    const results = await Result.find({});
    res.send(results);
}

const game_create = async (req, res) => {
    const {pokemonIdUi,pokemonIdPlayer,resultUi,resultPlayer} = req.body
    await Result.create({
        pokemonIdUi: pokemonIdUi,
        pokemonIdPlayer: pokemonIdPlayer,
        winner: resultUi===resultPlayer ? "draw" :
                resultUi>resultPlayer ? pokemonIdUi : pokemonIdPlayer,
        result:{
            resultUi:resultUi,
            resultPlayer:resultPlayer
        },
        date: Date.now()
    });
    res.send("OK!");
}

export {
    game_results,
    game_create
}