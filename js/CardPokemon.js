import { addPokemonTableRow } from "./table.js";
const tableBody = document.querySelector(".tableBody")

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

export function createCardPokemon(Data){
    let Card = document.createElement("div")
    let CardName = document.createElement("h3")
    let backImage = document.createElement("div")
    let CardButton = document.createElement("h3")
    let CardImage = document.createElement("img")

    CardName.innerText = Data.name + " #"+Data.id
    //CardImage.src = Data["sprites"]["front_default"]
	CardImage.src = Data["sprites"]["other"]["official-artwork"]["front_default"]
    CardButton.innerText = "Adicionar"

    Card.classList.add("CardPokemon")
    CardName.classList.add("cardPokemonName")
    backImage.classList.add("backImagePokemon")
    CardButton.classList.add("cardPokemonButton")
    CardImage.classList.add("imagePokemon")

	if(Data.types[0].type.name in colours){
		backImage.style.background = colours[Data.types[0].type.name]
	}else{
		backImage.style.background = "#ffffff"
	}

    backImage.appendChild(CardImage)

    Card.appendChild(CardName)
    Card.appendChild(backImage)
    Card.appendChild(CardButton)

	Card.addEventListener("click",()=>{
		addPokemonTableRow(Data)
	})
	return Card
}