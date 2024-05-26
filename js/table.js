const tableBody = document.querySelector(".tableBody")

import { pokemonIdAPI } from "./pokemonAPI.js";

export async function addPokemonTableRow(pokemon){
        try {
            
            const data = await pokemonIdAPI(pokemon.id)
            console.log(data)
            tableBody.appendChild(addTableRow(data))
        } catch (error) {
            
        }
}

function addTableRow(data){
    let rowTablePokemon = document.createElement("tr")
    let name = document.createElement("td")
    let podekex = document.createElement("td")
    let hp = document.createElement("td")
    let attack = document.createElement("td")
    let defense = document.createElement("td")
    let speed = document.createElement("td")

    name.innerText = data.name
    podekex.innerHTML = data.id
    hp.innerText = data.stats[0].base_stat
    attack.innerText = data.stats[1].base_stat
    defense.innerText = data.stats[2].base_stat
    speed.innerText = data.stats[5].base_stat

    rowTablePokemon.appendChild(name)
    rowTablePokemon.appendChild(podekex)
    rowTablePokemon.appendChild(hp)
    rowTablePokemon.appendChild(attack)
    rowTablePokemon.appendChild(defense)
    rowTablePokemon.appendChild(speed)

    name.classList.add("rowTablePokemonInfo")
    podekex.classList.add("rowTablePokemonInfo")
    hp.classList.add("rowTablePokemonInfo")
    attack.classList.add("rowTablePokemonInfo")
    defense.classList.add("rowTablePokemonInfo")
    speed.classList.add("rowTablePokemonInfo")
    rowTablePokemon.classList.add("rowTablePokemon")

    rowTablePokemon.addEventListener("dblclick",()=>{
        rowTablePokemon.classList.add("rowTablePokemonInfoRemove")
        setTimeout(() => {
            rowTablePokemon.remove()
        }, 1000);
    })

    return rowTablePokemon
}