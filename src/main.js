import { searchPokemon, topPokemon } from "./data.js";
import datapokemon from "./data/pokemon/pokemon.js";
import { pokemonComponent, pokemonBackComponent, pokemonList } from "./pokemonComponent.js";

// console.log(topPokemon(datapokemon));

const searchWrapper = document.querySelector(".searchInput");
const inputBox = searchWrapper.querySelector(".inputSearch");
const dataBox = searchWrapper.querySelector(".autocom__box");

inputBox.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = datapokemon.pokemon.filter((pokemon) => {
            return pokemon.name.includes(inputBox.value);
        });
        emptyArray = emptyArray.map((pokemon) => {
            return (pokemon = `<li data-name='${pokemon.name}'>${pokemon.name}</li>`);
        });
        searchWrapper.classList.add('active');
        showDataPokemon(emptyArray);
        let allList = dataBox.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            allList[i].addEventListener('click', selectName);
        }
    } else {
        searchWrapper.classList.remove('active');
    }
};

function selectName(event) {
    let selectUserData = event.target.dataset.name;
    inputBox.value = selectUserData;
}

function showDataPokemon(list) {
    let listData;
    if (!list.length) {
        let userValue = inputBox.value;
        listData = `<li>` + userValue + `</li>`;
    } else {
        listData = list.join('');
        dataBox.innerHTML = listData;

    }
}

const btnName = document.getElementById("btnName");
btnName.addEventListener("click", function() {
    const namePokemon = document.getElementById("namePokemon").value;
    const lowerCaseName = namePokemon.toLowerCase();
    const result = document.getElementById("result");
    const resultData = searchPokemon(lowerCaseName, datapokemon);
    const pokemonList = resultData.map(pokemonComponent);
    result.innerHTML = `${pokemonList}`;
});

btnName.addEventListener("click", function() {
    document.querySelector('.autocom__box').style.display = 'none';
    document.querySelector('.cardPokemon').style.display = 'block';
    document.querySelector('.btnBlackCard').style.display = 'block';
    document.querySelector('.topTenSection').style.display = 'none';
});
const autoComBox = document.querySelector('.autocom__box');
autoComBox.addEventListener('click', function() {
    document.querySelector('.autocom__box').style.display = 'none';
});

const btnBlackCard = document.querySelector('.btnBlackCard');
btnBlackCard.addEventListener('click', function() {
    document.querySelector('.cardPokemonBack').style.display = 'block';
});

btnName.addEventListener("click", function() {
    const namePokemon = document.getElementById("namePokemon").value;
    const lowerCaseName = namePokemon.toLowerCase();
    const resultBackCard = document.getElementById("resultBackCard");
    const resultDataBack = searchPokemon(lowerCaseName, datapokemon);
    const pokemonListBack = resultDataBack.map(pokemonBackComponent);
    resultBackCard.innerHTML = `${pokemonListBack}`;

});

const btnLeftCard = document.querySelector(".btnLeftCard");

btnLeftCard.addEventListener("click", function() {

});

document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
    const topTenPokemon = topPokemon(datapokemon);
    const topTenList = topTenPokemon.map(pokemonList);
    cardContainer.innerHTML = `${topTenList}`;

});