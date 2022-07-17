const pokemons = [
    {
        thumbnail: 'img/001.png',
        id:'N°01' ,
        name: 'bulbasaur',
        type: ['plant', 'poison'],
        price: 80
    },
    {
        thumbnail: 'img/002.png',
        id:'N°02',
        name: 'charmander',
        type: ['fire'],
        price: 100
    },
    {
        thumbnail: 'img/003.png',
        id:'N°03',
        name: 'caterpie',
        type: ['bug'],
        price: 90
    },
    {
        thumbnail: 'img/004.png',
        id:'N°04',
        name: 'kaluna',
        type: ['bug', 'poison'],
        price: 140
    },
    {
        thumbnail: 'img/005.png',
        id:'N°05',
        name: 'ratata',
        type: ['plant'],
        price: 50
    },
    {
        thumbnail: 'img/006.png',
        id:'N°06',
        name: 'pikachu',
        type: ['normal'],
        price: 60
    },
    {
        thumbnail: 'img/007.png',
        id:'N°07',
        name: 'vulpix',
        type: ['fire', 'plant'],
        price: 152
    },
    {
        thumbnail: 'img/008.png',
        id:'N°08',
        name: 'jigglypuff',
        type: ['normal', 'fairy'],
        price: 125
    },
    {
        thumbnail: 'img/009.png',
        id:'N°09',
        name: 'ice',
        type: ['bug'],
        price: 69
    },
    {
        thumbnail: 'img/010.png',
        id:'N°10',
        name: 'ground',
        type: ['electrical'],
        price: 124
    },
    {
        thumbnail: 'img/011.png',
        id:'N°11',
        name: 'ghost',
        type: ['poison'],
        price: 154
    },
    {
        thumbnail: 'img/012.png',
        id:'N°12',
        name: 'deer',
        type: ['fire'],
        price: 265
    },
    {
        thumbnail: 'img/013.png',
        id:'N°13',
        name: 'dark',
        type: ['fairy'],
        price: 124
    },
    {
        thumbnail: 'img/014.png',
        id:'N°14',
        name: 'stell',
        type: ['normal', 'electrical'],
        price: 98
    },
    {
        thumbnail: 'img/015.png',
        id:'N°15',
        name: 'cat',
        type: ['fire'],
        price: 124
    },
    {
        thumbnail: 'img/016.png',
        id:'N°16',
        name: 'rock',
        type: ['fairy', 'poison'],
        price: 204
    },
];
//logo with JS //////////////////////////////////////////////////////////////
/*const mainLogo = document.createElement('div');
mainLogo.id = 'logo';
document.body.append(mainLogo);
const titleLogo = document.createElement ('img');
titleLogo.className = 'pokemontitle';
titleLogo.src = 'img/pokemon_logo.png';
mainLogo.appendChild(titleLogo);
const ballLogo = document.createElement ('img');
ballLogo.className = 'pokeball';
ballLogo.src = 'img/pokeball.PNG';
mainLogo.appendChild(ballLogo);*/
///////////////////SEARCH_BAR/////////////////////////////////////////////////////////////
const searchInput = document.getElementById('pokSearch');
const containersList = document.getElementsByClassName('container');
const searchButton = document.querySelector('#searchBt');
​
searchInput.addEventListener('keyup', ()=>{
	let input = searchInput.value;
	input = input.toLowerCase();
	for (let k = 0; k < containersList.length; k++) {
		if (containersList[k].innerHTML.toLowerCase().includes(input)) {
			containersList[k].style.display="block";
		}
		else {
			containersList[k].style.display="none";				
		}
	}
});
searchButton.addEventListener('click', (e)=>{
    searchInput.focus();
    e.preventDefault()
});
//section///////////////////////////////////////////////////////////////////////
const mainSection = document.querySelector('.mainSection');
for (let i=0; i<pokemons.length; i++){
    createPokemonCart(i)
}
​
function createPokemonCart(i){
    const pokemoncontainer = document.createElement ('div');
    pokemoncontainer.className = 'container';
    mainSection.appendChild(pokemoncontainer);
    
    const imgContainer = document.createElement ('div');
    imgContainer.className = 'background-img';
    pokemoncontainer.appendChild(imgContainer);
    
    const image = document.createElement ('img');
    image.className = 'content-img';
    imgContainer.appendChild(image);
    image.src = pokemons[i].thumbnail;
    
    const number = document.createElement ('span');
    number.className = 'pokemonNumber';
    pokemoncontainer.appendChild(number);
    number.innerHTML = pokemons[i].id +"<br>";
    
    const name = document.createElement ('span');
    name.className = 'pokemonName';
    pokemoncontainer.appendChild(name);
    name.innerHTML = pokemons[i].name +"<br>";
    
    for (var j=0; j<pokemons[i].type.length; j++){
        const bt = document.createElement ('button');
        bt.className = pokemons[i].type[j] +' '+ 'pokemonButton';
        pokemoncontainer.appendChild(bt);
        bt.innerHTML = pokemons[i].type[j];
    }
    const priceBt = document.createElement ('button');
    priceBt.className = 'pokPrice';
    priceBt.id = 'currPrice'
    pokemoncontainer.appendChild(priceBt);
    priceBt.innerHTML = '$ '+ pokemons[i].price;
    const buyBt = document.createElement ('button');
    buyBt.className = 'buyBt';
    buyBt.id = 'buyBtId'
    pokemoncontainer.appendChild(buyBt);
    buyBt.innerHTML = 'Buy';
}
​
​
​
//Cart
const removebutton = document.getElementsByClassName('remove');
 for (let i=0; i<removebutton.length; i++){
     const button = removebutton[i]
     button.addEventListener('click', removefunction )
}
​
function removefunction(e) {
    const clickedButton = e.target
    clickedButton.parentElement.parentElement.remove();
    updateTotal()
}
​
function updateTotal(){
    const footerSection = document.getElementsByClassName('footerSection')[0]
    const footeContainer = footerSection.getElementsByClassName('footerContainer')
    let total = 0
    for (let i=0; i<footeContainer.length; i++){
         const getrow = footeContainer[i]
         const getprice = getrow.getElementsByClassName('footerPrice')[0]
         const quantityEle = getrow.getElementsByClassName('inputValue')[0]
         const price = parseFloat (getprice.innerText.replace('$', ''))
         const quantity = quantityEle.value
​
        total = total + (price * quantity)
        console.log(total)
    }
    
    document.getElementsByClassName('total')[0].innerText ='Total: $ ' + total
}