const pokemons = [
    {
        thumbnail: 'images/001.png',
        id:'N°01' ,
        name: 'bulbasaur',
        type: ['plant', 'poison']
    },
    {
        thumbnail: 'images/002.png',
        id:'N°02',
        name: 'charmander',
        type: ['fire']
    },
    {
        thumbnail: 'images/003.png',
        id:'N°03',
        name: 'caterpie',
        type: ['bug']
    },
    {
        thumbnail: 'images/004.png',
        id:'N°04',
        name: 'kaluna',
        type: ['bug', 'poison']
    },
    {
        thumbnail: 'images/005.png',
        id:'N°05',
        name: 'ratata',
        type: ['ratata']
    },
    {
        thumbnail: 'images/006.png',
        id:'N°06',
        name: 'pikachu',
        type: ['pikachu']
    },
    {
        thumbnail: 'images/007.png',
        id:'N°07',
        name: 'vulpix',
        type: ['fire', 'plant']
    },
    {
        thumbnail: 'images/008.png',
        id:'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy']
    },
    {
        thumbnail: 'images/009.png',
        id:'N°09',
        name: 'ice',
        type: ['fairy']
    },
    {
        thumbnail: 'images/010.png',
        id:'N°10',
        name: 'ground',
        type: ['electrical']
    },
    {
        thumbnail: 'images/011.png',
        id:'N°11',
        name: 'ghost',
        type: ['position']
    },
    {
        thumbnail: 'images/012.png',
        id:'N°12',
        name: 'deer',
        type: ['faire']
    },
    {
        thumbnail: 'images/013.png',
        id:'N°13',
        name: 'dark',
        type: ['fairy']
    },
    {
        thumbnail: 'images/014.png',
        id:'N°14',
        name: 'stell',
        type: ['normal', 'electrical']
    },
    {
        thumbnail: 'images/015.png',
        id:'N°15',
        name: 'cat',
        type: ['fire']
    },
    {
        thumbnail: 'images/016.png',
        id:'N°16',
        name: 'rock',
        type: ['fairy', 'Poison']
    },
];


// // Barra de busqueda
const searchInput = document.getElementById("searchInput");
const containersList = document.getElementsByClassName("search_container");
const searchButton = document.querySelector("btn");

searchInput.addEventListener("keyup", ()=>{
    let input = searchInput.value;
    input = input.toLowerCase();
    for (let k = 0; k < containersList.length; k++); {
        if(containersList[k].innerHTML.toLowerCase().includes(input)) {
            containersList[k].style.display="block";
        }
        else {
            containersList[k].style.display="none";
        }
    }
});

searchButton.addEventListener("click", (event)=>{
    searchInput.focus();
    event.preventDefault()
});


// contenedor

const cardsContainer = document.getElementById("cardsContainer");

for(let index = 0; index < pokemons.length; index++){
    createCardContainer(index)
}

function createCardContainer(index){
    const card = document.createElement("div");
    card.className = "cards_container";
    cardsContainer.appendChild(card);

    const pokemon_number = document.createElement("p");
    pokemon_number.className = "pokemon_number";
    card.appendChild(pokemon_number);
    pokemon_number.innerHTML = pokemons[index].id;
    
    const cardImage = document.createElement("div");
    cardImage.className = "card_background";
    card.appendChild(cardImage);
    
    const pokemon_image = document.createElement("img");
    pokemon_image.className = "pokemon_image";
    cardImage.appendChild(pokemon_image);
    pokemon_image.src = pokemons[index].thumbnail;

    const pokemon_name = document.createElement("div");
    pokemon_name.className = "pokemon_name";
    card.appendChild(pokemon_name);
    pokemon_name.innerHTML = pokemons[index].name;

    for (let z = 0; z < pokemons[index].type.length; z++){
        const button = document.createElement ('button');
        button.className = pokemons[index].type[z] +' '+ 'pokemonButton';
        // pendiente por quitar
        card.appendChild(button);
        button.innerHTML = pokemons[index].type[z];
    }



}
    


