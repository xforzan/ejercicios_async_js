
const pokemonsList = []


fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
.then((pokemons) =>  pokemons.json()
.then((pokemonsJson) => {(pokemonsList.push(...pokemonsJson.results))
    const img = document.querySelector(".random-image")
    const max = pokemonsList.length
    const randomNum = Math.floor(Math.random()*max) + 1
    img.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNum}.png`
    const title = document.createElement("h1")
    title.classList.add("title")
    title.innerHTML = pokemonsList[randomNum].name
    document.body.appendChild(title)
    


}
)



)