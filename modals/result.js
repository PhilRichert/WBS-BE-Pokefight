import mongoose from "mongoose"

const resultSchema = new mongoose.Schema({
    pokemonIdUi: Number,
    pokemonIdPlayer: Number,
    winner: Number,
    result:{
        resultUi: Number,
        resultPlayer: Number,
    },
    date: { type: Date, default: Date.now },
})

export default resultSchema