const htmlResult = document.getElementById("searchPokemonResult")
const NextButton = document.getElementById("Next")
const PrevButton = document.getElementById("Prev")

import { createCardPokemon } from "./CardPokemon.js";
import { pokemonIdAPI, AllpokemonAPI, pokemonUrlAPI } from "./pokemonAPI.js";

navPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")

export async function navPokemons(url) {
    try {
        const data = await pokemonUrlAPI(url)
        NavButton(data)
        for (const element of data.results) {
            await loadHtmlPokemon(element.name);
        };
    } catch (error) {
        console.log(Error)
    }
}

async function loadHtmlPokemon(data){
    const pokemon = await pokemonIdAPI(data)
    htmlResult.appendChild(createCardPokemon(pokemon))
}

function NavButton(data) {
    
    if(data.next){
        NextButton.style.display = "block"
        NextButton.addEventListener("click", handleNextClick);
    }else{
        NextButton.style.display = "none"
    }
    if(data.previous){
        PrevButton.style.display = "block"
        PrevButton.addEventListener("click", handlePrevClick);
    }else{
        PrevButton.style.display = "none"
    }

    function handleNextClick() {
        htmlResult.innerHTML=""
        navPokemons(data.next);
        NextButton.removeEventListener("click", handleNextClick);
        PrevButton.removeEventListener("click", handlePrevClick);
    }

    function handlePrevClick() {
        htmlResult.innerHTML=""
        navPokemons(data.previous);
        NextButton.removeEventListener("click", handleNextClick);
        PrevButton.removeEventListener("click", handlePrevClick);
    }
}


