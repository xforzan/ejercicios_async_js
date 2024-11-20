
const charactersList= []

fetch("https://thronesapi.com/api/v2/Characters").then((characters)=> 
    characters.json()
.then((charactersJson) => {
    charactersList.push(...charactersJson)

const selection = document.querySelector("#character-list")
const img = document.querySelector(".character-image")
img.src = "https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
const option = document.createElement("option")
selection.appendChild(option)
option.innerHTML = "Selecciona un personaje"
option.value = "default"

for (const character of charactersList){
    const option = document.createElement("option")
    option.innerHTML = character.fullName
    option.value = character.id
    selection.appendChild(option)
}


selection.addEventListener("input",()=> {
    const index = charactersList.findIndex(char => char.id === Number(selection.value))
    img.src = charactersList[index].imageUrl
    img.alt = selection.value
})

})

).catch((error) =>{
    console.log("Parece ser que algo no va del todo bien :(")
})


// DOM

const title = document.createElement("h1")
title.classList.add("title")
title.innerHTML = "Game of Thrones"

document.body.prepend(title)