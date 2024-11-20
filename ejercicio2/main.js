
const pokemonsList = []


fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
.then((pokemons) =>  pokemons.json()
.then((pokemonsJson) => {(pokemonsList.push(...pokemonsJson.results))
    console.log(pokemonsList)
    const img = document.querySelector(".random-image")


}
)



)