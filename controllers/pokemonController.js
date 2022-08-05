import pokedex from "../src/pokedex.json" assert {type: "json"};

const pokemonById = (req) => {
    return pokedex.find(pokemon => pokemon.id===parseInt(req.params.id))
}

const pokemon_all = (req, res) => {
    res.send(pokedex);
}

const pokemon_id = (req, res) => {
    res.send(pokemonById(req))
}

const pokemon_id_info = (req, res) => {
    const pokemon = pokemonById(req)
    res.send(pokemon[req.params.info]);
}

export {
    pokemon_all,
    pokemon_id,
    pokemon_id_info
}