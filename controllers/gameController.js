import "dotenv/config"

import mongoose from "mongoose"
import Result from "../modals/result.js"

mongoose.connect(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
})

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
})

mongoose.connection.on("error", (err) => {
    console.error(err)
})

const game_results = async (req, res) => {
    try {
        const results = await Result.find({})
        res.send(results)         
    } catch (error) {
        res.send(error)
    }
}

const game_create_post = async (req, res) => {
    const {pokemonIdNPC, pokemonIdPlayer, resultNPC, resultPlayer} = req.body
    try {
        if ((pokemonIdNPC && pokemonIdPlayer) !== (undefined || 0)){
            await Result.create({
                pokemonIdNPC: pokemonIdNPC,
                pokemonIdPlayer: pokemonIdPlayer,
                winner: (resultNPC===resultPlayer ? 0 : resultNPC>resultPlayer ? pokemonIdNPC : pokemonIdPlayer),
                result: {
                    resultNPC:resultNPC,
                    resultPlayer:resultPlayer
                },
                date: Date.now()
            })
            res.send("OK!")
        }
    } catch (error) {
        res.send(`Deine Schuld: ${error}`)        
    }
}

export {
    game_results,
    game_create_post
}