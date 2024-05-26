const idInput = document.getElementById("searchPokemonNumber")
const htmlResult = document.getElementById("searchPokemonResult")

import { createCardPokemon } from "./CardPokemon.js";
import { pokemonIdAPI } from "./pokemonAPI.js";
import {navPokemons} from "./Navigationscript.js"

idInput.addEventListener("input",()=>{
    idFilter()
})

async function idFilter(){
    htmlResult.innerHTML = ""
    if(idInput.value){
        try {
            const data = await pokemonIdAPI(idInput.value)
            htmlResult.appendChild(createCardPokemon(data))
        } catch (error) {
            
        }
    }else{
        navPokemons("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
    }
}