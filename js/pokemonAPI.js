export function pokemonIdAPI(id){
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON in the response
        })
        .then(data => {
          // Resolve a promessa com os dados JSON
          resolve(data);
        })
        .catch(error => {
          // Rejeita a promessa com o erro
          reject(error);
        });
    });
  }

export function AllpokemonAPI(){
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON in the response
        })
        .then(data => {
          // Resolve a promessa com os dados JSON
          resolve(data);
        })
        .catch(error => {
          // Rejeita a promessa com o erro
          reject(error);
        });
    });
  }

  export function pokemonUrlAPI(url){
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Parse the JSON in the response
        })
        .then(data => {
          // Resolve a promessa com os dados JSON
          resolve(data);
        })
        .catch(error => {
          // Rejeita a promessa com o erro
          reject(error);
        });
    });
  }