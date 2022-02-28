import { searchPokemon } from "./data.js";
import datapokemon from "./data/pokemon/pokemon.js";
import { pokemonComponent, pokemonBackComponent } from "./pokemonComponent.js";

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

<<<<<<< HEAD
btnName.addEventListener("click", function () {
  const namePokemon = document.getElementById("namePokemon").value;
  const lowerCaseName= namePokemon.toLowerCase();
  const resultBackCard = document.getElementById("resultBackCard");
  const resultDataBack = searchPokemon(lowerCaseName, datapokemon);
  const pokemonListBack = resultDataBack.map(function (pokemon) {
    return `<li class="backContainer">
            <p class="namePokemon">${pokemon.name}</p>
            <p class="namePokemon">${pokemon.num}</p>
            <p class="typePokemon">${pokemon.type} </p>
            <p class= "sizePokemon"> ${pokemon.size.height}  ${pokemon.size.weight}</p>
            <div class="resistantPokemon"><p>${pokemon.resistant[0]}</p><br>
            <div class="weaknessesPokemon"><p>${pokemon.weaknesses[0]}
            </li>`;
  });
  resultBackCard.innerHTML = `${pokemonListBack}`;
  // document.getElementById('result').innerHTML=resultData[0].name;
  // document.getElementById('result__1').innerHTML=resultData[0].about;
  // document.getElementById('result__2').innerHTML=resultData[0].generation.num;
  // document.getElementById('result__3').innerHTML=resultData[0].stats['base-attack'];
});

=======
btnName.addEventListener("click", function() {
    const namePokemon = document.getElementById("namePokemon").value;
    const lowerCaseName = namePokemon.toLowerCase();
    const resultBackCard = document.getElementById("resultBackCard");
    const resultDataBack = searchPokemon(lowerCaseName, datapokemon);
    const pokemonListBack = resultDataBack.map(pokemonBackComponent);
    resultBackCard.innerHTML = `${pokemonListBack}`;
>>>>>>> 8f6a31d76d7069a072e9caad328ed5673d8d5170

});