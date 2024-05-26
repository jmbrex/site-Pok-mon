const htmlResult = document.getElementById("searchPokemonResult")

import { createCardPokemon } from "./CardPokemon.js";
import { pokemonIdAPI, pokemonAPI, pokemonUrlAPI } from "./pokemonAPI.js";

async function loadPokemons() {
    for (let index = 1; index <= 50; index++) {
        try {
            const data = await pokemonIdAPI(index);
            // Use os dados aqui
            htmlResult.appendChild(createCardPokemon(data));
        } catch (error) {
            // Trate os erros aqui
            console.error('Erro ao obter os dados:', error);
        }
    }
}

//loadPokemons();

async function loadAllPokemons(){
    try {
        const data = await pokemonAPI();
        // Use os dados aqui
        /*data.results.forEach(element => {
            teste(element)
        });*/
        console.log(data)
    } catch (error) {
        // Trate os erros aqui
        console.error('Erro ao obter os dados:', error);
    }
}
loadAllPokemons()

async function teste(data){
    try {
        const pokemon = await pokemonUrlAPI(data.url)
        htmlResult.appendChild(createCardPokemon(pokemon))
    } catch (error) {
        // Trate os erros aqui
        console.error('Erro ao obter os dados:', error);
    }
}