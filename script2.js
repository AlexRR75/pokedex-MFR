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

const pokemonTypes =[];
//para crear un array con los nombres 
const pokemonNames =[];
console.log(pokemonNames);


const cardsContainer = document.getElementById("cardsContainer");

for(let index = 0; index < pokemons.length; index++){
// este es el contenedor de cada card
    const eachCard = document.createElement("div");
    eachCard.className = "each_card";
    cardsContainer.appendChild(eachCard);

    // creación del contenedor de cada imagen
    const imageContainer = document.createElement("div");
    imageContainer.className = "each_image";
    eachCard.appendChild(imageContainer);
    
    // creación de la etiqueta de cada imagen
    const pokemonImage = document.createElement("img");
    pokemonImage.className = "pokemon_image";
    imageContainer.appendChild(pokemonImage);
    pokemonImage.src = pokemons[index].thumbnail;

    const pokemonInfo = document.createElement("div");
    pokemonInfo.className = "card_info";
    eachCard.appendChild(imageContainer);

    const pokemonNumber = document.createElement("h3");
    pokemonNumber.className = "pokemon_number";
    eachCard.appendChild(pokemonNumber);
    pokemonNumber.innerHTML = pokemons[index].id;

    const pokemonName = document.createElement("h1");
    pokemonName.className = "pokemon_name";
    eachCard.appendChild(pokemonName);
    pokemonName.innerHTML = pokemons[index].name;

    const type = pokemons[index].type
    //para rellenar los nombres
    const name = pokemons[index].name
    

    //inicio del contenedor para el buscador por nombre

    const searchBar = document.querySelector("#searchBar");
    const buttom = document.querySelector("#buttom");
    const result = document.querySelector("#result");


    const search = ()=>{
        // console.log(searchBar.value);
        result.innerHTML = "";

        const cardsContainer = document.getElementById("cardsContainer");
        cardsContainer.innerHTML="";

        const text = searchBar.value.toLowerCase();
        for(let pokemon of pokemons){
            let nameSearched = pokemon.name.toLowerCase();
            if(nameSearched.indexOf(text) !== -1){
                // result.innerHTML +=`
                // <li>${pokemon.name}</li>
                // `
                
                // este es el contenedor de cada card
                const eachCard = document.createElement("div");
                eachCard.className = "each_card";
                cardsContainer.appendChild(eachCard);
            
                // creación del contenedor de cada imagen
                const imageContainer = document.createElement("div");
                imageContainer.className = "each_image";
                eachCard.appendChild(imageContainer);
                
                // creación de la etiqueta de cada imagen
                const pokemonImage = document.createElement("img");
                pokemonImage.className = "pokemon_image";
                imageContainer.appendChild(pokemonImage);
                pokemonImage.src = pokemon.thumbnail;
            
                const pokemonInfo = document.createElement("div");
                pokemonInfo.className = "card_info";
                eachCard.appendChild(imageContainer);
            
                const pokemonNumber = document.createElement("h3");
                pokemonNumber.className = "pokemon_number";
                eachCard.appendChild(pokemonNumber);
                pokemonNumber.innerHTML = pokemon.id;
            
                const pokemonName = document.createElement("h1");
                pokemonName.className = "pokemon_name";
                eachCard.appendChild(pokemonName);
                pokemonName.innerHTML = pokemon.name;
            
                const type = pokemon.type
                
                for(let typeIndex = 0; typeIndex < type.length; typeIndex++){
                    const pokemonType = document.createElement("h3");
                    pokemonType.className = "pokemon_type";
                    eachCard.appendChild(pokemonType);
                    pokemonType.innerHTML = type[typeIndex];
                }    
    
            }
        }

    }
        }

    //     if(result.innerHTML === ""){
    //         result.innerHTML += `
    //         <li>Pokemon not found</li>
    //         `
    //     }
    // }

    buttom.addEventListener("click", search);
    searchBar.addEventListener("keyup", search);

    
    
        // pokemonSearch.id = "pokemonSearch";
        // eachCard.appendChild(pokemonNumber);
        // pokemonNumber.innerHTML = filtered[index].id;
    
    for(let typeIndex = 0; typeIndex < type.length; typeIndex++){
        const pokemonType = document.createElement("h3");
        pokemonType.className = "pokemon_type";
        eachCard.appendChild(pokemonType);
        pokemonType.innerHTML = type[typeIndex];         

        // Ahora vamos a rellenar los tipos de pokémons

        pokemonTypes.push(type[typeIndex]);
    }
    
    // intento de rellenar los nombres

    for(let nameIndex = 0; nameIndex < name.length; nameIndex++){
        const pokemonName = document.createElement("h3");
        pokemonName.className = "pokemon_name";
        eachCard.appendChild(pokemonName);
        pokemonName.innerHTML = name[nameIndex];         

        pokemonNames.push(name[nameIndex]);
        
    }



const pokemonsName = pokemonTypes.filter((name, index, names) => {
    return names.indexOf(name)==index
})

const typeSelect = document.querySelector("#filterType");
for(let index = 0; index < pokemonsName.length; index++){
    const nameOption = document.createElement("option");
    nameOption.value= pokemonsName[index];
    nameOption.innerHTML= pokemonsName[index];
    typeSelect.appendChild(nameOption);

}

typeSelect.addEventListener("change", (event) => {
const typeSelecter = event.target.value
const filtered = pokemons.filter(pokemon => pokemon.type.includes(typeSelecter) )
console.log(filtered);


const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML="";


for(let index = 0; index < filtered.length; index++){
    // este es el contenedor de cada card
        const eachCard = document.createElement("div");
        eachCard.className = "each_card";
        cardsContainer.appendChild(eachCard);
    
        // creación del contenedor de cada imagen
        const imageContainer = document.createElement("div");
        imageContainer.className = "each_image";
        eachCard.appendChild(imageContainer);
        
        // creación de la etiqueta de cada imagen
        const pokemonImage = document.createElement("img");
        pokemonImage.className = "pokemon_image";
        imageContainer.appendChild(pokemonImage);
        pokemonImage.src = filtered[index].thumbnail;
    
        const pokemonInfo = document.createElement("div");
        pokemonInfo.className = "card_info";
        eachCard.appendChild(imageContainer);
    
        const pokemonNumber = document.createElement("h3");
        pokemonNumber.className = "pokemon_number";
        eachCard.appendChild(pokemonNumber);
        pokemonNumber.innerHTML = filtered[index].id;
    
        const pokemonName = document.createElement("h1");
        pokemonName.className = "pokemon_name";
        eachCard.appendChild(pokemonName);
        pokemonName.innerHTML = filtered[index].name;
    
        const type = filtered[index].type
        
        for(let typeIndex = 0; typeIndex < type.length; typeIndex++){
            const pokemonType = document.createElement("h3");
            pokemonType.className = "pokemon_type";
            eachCard.appendChild(pokemonType);
            pokemonType.innerHTML = type[typeIndex];
        }    
    
    }
})

const nameSelect = document.querySelector("#filterName");
for(let index = 0; index < pokemonsName.length; index++){
    const nameOption = document.createElement("option");
    nameOption.value= pokemonsName[index];
    nameOption.innerHTML= pokemonsName[index];
    nameSelect.appendChild(nameOption);

}

nameSelect.addEventListener("change", (event) => {
const nameSelecter = event.target.value
const named = pokemons.filter(pokemon => pokemon.name.includes(nameSelecter) )
console.log(named);


const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.innerHTML="";


for(let index = 0; index < filtered.length; index++){
    // este es el contenedor de cada card
        const eachCard = document.createElement("div");
        eachCard.className = "each_card";
        cardsContainer.appendChild(eachCard);
    
        // creación del contenedor de cada imagen
        const imageContainer = document.createElement("div");
        imageContainer.className = "each_image";
        eachCard.appendChild(imageContainer);
        
        // creación de la etiqueta de cada imagen
        const pokemonImage = document.createElement("img");
        pokemonImage.className = "pokemon_image";
        imageContainer.appendChild(pokemonImage);
        pokemonImage.src = filtered[index].thumbnail;
    
        const pokemonInfo = document.createElement("div");
        pokemonInfo.className = "card_info";
        eachCard.appendChild(imageContainer);
    
        const pokemonNumber = document.createElement("h3");
        pokemonNumber.className = "pokemon_number";
        eachCard.appendChild(pokemonNumber);
        pokemonNumber.innerHTML = filtered[index].id;
    
        const pokemonName = document.createElement("h1");
        pokemonName.className = "pokemon_name";
        eachCard.appendChild(pokemonName);
        pokemonName.innerHTML = filtered[index].name;
    
        const type = filtered[index].type
        
        for(let typeIndex = 0; typeIndex < type.length; typeIndex++){
            const pokemonType = document.createElement("h3");
            pokemonType.className = "pokemon_type";
            eachCard.appendChild(pokemonType);
            pokemonType.innerHTML = type[typeIndex];
        }    
    
    }
})

// construcción de la barra de busqueda

const searchInput = document.getElementById("pokeSearch");
const containersList = document.getElementsByClassName("container");
const searchButton = document.querySelector("searchButton");

searchInput.addEventListener("keyup", ()=>{
    let input = searchInput.value;
    input = input.toLowerCase();
    for (let i = 0; i < containersList.length; i++); {
        if(containersList[i].innerHTML.toLowerCase().includes(input)) {
            containersList[i].style.display="block";
        }
        else {
            containersList[i].style.display="none";
        }
    }
});
searchButton.addEventListener("click",(element)=>{
    searchInput.focus();
    element.preventDefault()
});

