const pokemons = [
    {
        thumbnail: 'img/001.png',
        id:'N°01' ,
        name: 'bulbasaur',
        type: ['plant', 'poison']
    },
    {
        thumbnail: 'img/002.png',
        id:'N°02',
        name: 'charmander',
        type: 'fire'
    },
    {
        thumbnail: 'img/003.png',
        id:'N°03',
        name: 'caterpie',
        type: 'bug'
    },
    {
        thumbnail: 'img/004.png',
        id:'N°04',
        name: 'kaluna',
        type: ['bug', 'poison']
    },
    {
        thumbnail: 'img/005.png',
        id:'N°05',
        name: 'ratata',
        type: 'ratata'
    },
    {
        thumbnail: 'img/006.png',
        id:'N°06',
        name: 'pikachu',
        type: 'pikachu'
    },
    {
        thumbnail: 'img/007.png',
        id:'N°07',
        name: 'vulpix',
        type: ['fire', 'plant']
    },
    {
        thumbnail: 'img/008.png',
        id:'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy']
    },
    {
        thumbnail: 'img/009.png',
        id:'N°09',
        name: 'ice',
        type: 'fairy'
    },
    {
        thumbnail: 'img/010.png',
        id:'N°10',
        name: 'ground',
        type: 'electrical'
    },
    {
        thumbnail: 'img/011.png',
        id:'N°11',
        name: 'ghost',
        type: 'position'
    },
    {
        thumbnail: 'img/012.png',
        id:'N°12',
        name: 'deer',
        type: 'faire'
    },
    {
        thumbnail: 'img/013.png',
        id:'N°13',
        name: 'dark',
        type: 'fairy'
    },
    {
        thumbnail: 'img/014.png',
        id:'N°14',
        name: 'stell',
        type: ['normal', 'electrical']
    },
    {
        thumbnail: 'img/015.png',
        id:'N°15',
        name: 'cat',
        type: 'fire'
    },
    {
        thumbnail: 'img/016.png',
        id:'N°16',
        name: 'rock',
        type: ['fairy', 'Poison']
    },
]; 



/* <div class="card">
            <figure class="cardImage">
                <img src="images/001.png" alt="pokémon1">
            </figure>
            <div class="cardInfo">
                <h3 class="number">Nro.01</h3>
                <h1 class="name">Bulbasour</h1>
                <div class="powers">
                    <p class="type1">Plant</p>
                    <p class="type2">Poison</p>
                </div>
            </div>    
        </div> */


// const cardsContainer =document.querySelector('.cardsContainer');

// for (var i = 0; i<pokemons.length; i++) {
//     const card =document.createElement ('div');
//     const cardInfo =document.createElement ('div');
//     const pokemonName =document.createElement ('h1');
//     pokemonName.innerHTML = pokemons[i].name;
//     card.appendChild(cardInfo);
//     cardInfo.appendChild(pokemonName);
    
//     cardsContainer.appendChild(card);
// }


let myObject = {
    marca: 'Mazda',
    modelo: 'CX5',
    color: 'Rojo',
    carDetails: function(){
        console.log('Auto ${this.marca} ${this.modelo} ${this.color}')
    }
};

// const foodList = ['Pizza', 'Ramen', 'Paella'];
// const nationalities = ['Italian', 'Japanese', 'Spanish'];
// const phrases1 = nationalities.map(item => {
//    return "Since I'm " + item
// });
// const phrases2 = foodList.map(item => {
//     return " I love eating " + item
//  });

//  console.log(phrases1 + phrases2);

//  const nationalitiesFoodList = [
//     let info1:{
//          country:'Italian',
//          food: 'Pizza'
//         },
//     let info2:{
//         country:'Japanese',
//         food: 'Ramen'
//         },
//     let info3:{
//         country:'Spanish',
//         food: 'Paella'
//         }
//     ];

 
//  const phrases1 = nationalitiesFoodList.map(item => {
//     return "Since I'm " + info1.country + " I love eating " + info1.food
//  });

const nationalities = ['Italian', 'Japanese', 'Spanish'];
const foodList = ['Pizza', 'Ramen', 'Paella'];


//let prefijos = ["super", "spider", "ant", "iron"]
//let sufijo = "man";

let fraseCompleta = nationalities.map(item => nationalities + foodList);

console.log(fraseCompleta);
 
 

// 'Since I'm Italian, I love eating Pizza',
// 'Since I'm Japanese, I love eating Ramen',
// 'Since I'm from Valencia, I love eating Paella', 

        // const nationalities = ['Italian', 'Japanese', 'Spanish'];
        // const foodList = ['Pizza', 'Ramen', 'Paella'];
        
        
        // //let prefijos = ["super", "spider", "ant", "iron"]
        // //let sufijo = "man";
        
        // let fraseCompleta = nationalities.map(item => nationalities + foodList);
        
        // console.log(fraseCompleta);

    // const nationalities = ['Italian', 'Japanese', 'Spanish'];
    //     const foodList = ['Pizza', 'Ramen', 'Paella'];
        
        
    //     //let prefijos = ["super", "spider", "ant", "iron"]
    //     //let sufijo = "man";
        
    //     let fraseCompleta = nationalities.map(item => "Since " + nationalities + " i love " + foodList);
            
    //     console.log(fraseCompleta);
    //     VM462:10 (3) ['Since Italian,Japanese,Spanish i love Pizza,Ramen,Paella', 'Since Italian,Japanese,Spanish i love Pizza,Ramen,Paella', 'Since Italian,Japanese,Spanish i love Pizza,Ramen,Paella']

    const nationalitiesFoodList = [
        {country:'Italian', food: 'Pizza'},
        {country:'Japanese', food: 'Ramen'},
        {country:'Spanish', food: 'Paella'}
    ];

    let phrases = nationalitiesFoodList.map(function(country,food){
        return 'Since I am ' + country + ' , I love eating ' + food 
    });

    const nationalitiesFoodList = [
        {country:'Italian', food: 'Pizza'},
        {country:'Japanese', food: 'Ramen'},
        {country:'Spanish', food: 'Paella'}
    ];

    let phrases = nationalitiesFoodList.map(function(country,food){
        return 'Since I am ' + nationalitiesFoodList.country + ' , I love eating ' + nationalitiesFoodList.food 
    });


// const nationalities = ['Italian', 'Japanese', 'Spanish'];
// const foodList = ['Pizza', 'Ramen', 'Paella'];

// const phrases = nationalities.map((nationality, index) => {
// console.log(nationality,index);
// const food = foodList[index] 
// return `Since I am ${nationality}, I love ${food}`
// });




// function solution(array) {
//     const array = [2, 4, 5, 6];
//     const arrayX2 = array.map(index * 2);
//     return arrayX2;
// };

const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    
}

const names2 = ['Albert', 'Clay', 'Mike']; 
for (index = 0; index < names2.length; index++) {
    const element = names2[index];
    console.log('Hello ', element)
}