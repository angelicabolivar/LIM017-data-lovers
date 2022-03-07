import { searchPokemon, topPokemon, cpPokemon, filterGeneration, percentage, filterType } from "./data.js";
import datapokemon from "./data/pokemon/pokemon.js";
import { pokemonComponent, pokemonBackComponent, pokemonList, cpResultListName, cpResultPokemon1, cpResultPokemon2, generationiFilteri, generationiiFilterii } from "./pokemonComponent.js";


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


document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById("cardContainer");
    const topTenPokemon = topPokemon(datapokemon);
    const topTenList = topTenPokemon.map(pokemonList);
    cardContainer.innerHTML = `${topTenList}`;

});

const compareBtn = document.getElementById("compareBtn");
compareBtn.addEventListener("click", function() {
    const pokemon1Result = document.getElementById('pokemon1Result');
    const pokemon2Result = document.getElementById('pokemon2Result');
    const pokemon1 = document.getElementById("pokemon1").value;
    const lowerCaseName1 = pokemon1.toLowerCase();
    const resultPokemon1 = searchPokemon(lowerCaseName1, datapokemon);
    const listPokemon1 = resultPokemon1.map(cpResultPokemon1);
    pokemon1Result.innerHTML = `${listPokemon1}`

    const pokemon2 = document.getElementById("pokemon2").value;
    const lowerCaseName2 = pokemon2.toLowerCase();
    const resultPokemon2 = searchPokemon(lowerCaseName2, datapokemon);
    const resultMayorCp = document.getElementById('resultMayorCp');

    const listPokemon2 = resultPokemon2.map(cpResultPokemon2);
    pokemon2Result.innerHTML = `${listPokemon2}`




    const cpResult = cpPokemon(resultPokemon1[0], resultPokemon2[0]);
    console.log(cpResult);
    const cpResultList = cpResultListName(cpResult);
    resultMayorCp.innerHTML = `${cpResultList}`;


});


const generationi = 'generation i';
const generationiResult = document.getElementById('generationiResult');
const filterGenerationi = filterGeneration(datapokemon, generationi);
const filterListGenerationi = filterGenerationi.map(generationiFilteri);
generationiResult.innerHTML = `${filterListGenerationi}`;


const generationii = 'generation ii';
const generationiiResult = document.getElementById('generationiiResult');
const filterGenerationii = filterGeneration(datapokemon, generationii);
const filterListGenerationii = filterGenerationii.map(generationiiFilterii);
generationiiResult.innerHTML = `${filterListGenerationii}`;


const type = 'grass';
const inputData = filterGeneration(datapokemon, generationi);
const filterTypeG = filterType(inputData, type);
console.log(filterTypeG);

const percentGrassi = percentage(filterTypeG.length, inputData.length);
console.log(percentGrassi);

const type2 = 'grass';
const inputData2 = filterGeneration(datapokemon, generationii);
const filterTypeG2 = filterType(inputData2, type2);
console.log(filterTypeG2);

const percentGrassii = percentage(filterTypeG2.length, inputData2.length);
console.log(percentGrassii);