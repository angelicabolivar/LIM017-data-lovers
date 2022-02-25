import { searchPokemon } from "./data.js";
import datapokemon from "./data/pokemon/pokemon.js";

const searchWrapper = document.querySelector(".searchInput");
const inputBox = searchWrapper.querySelector(".inputSearch");
const dataBox = searchWrapper.querySelector(".autocom__box");

function selectName(element){
  let selectUserData= element.innerHTML;
  inputBox.value=selectUserData;
}

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = datapokemon.pokemon.filter((pokemon) => {
      return pokemon.name.includes(inputBox.value);
    });
    emptyArray = emptyArray.map((pokemon) => {
      return (pokemon = `<li>` + pokemon.name + `</li>`);
    });
    searchWrapper.classList.add("active");
    showDataPokemon(emptyArray);
    let allList = dataBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", 'selectName(this)');
    }
  } else {
    searchWrapper.classList.remove("active");
  }
};
function showDataPokemon(list) {
  let listData;
  if (!list.length) {
    let userValue = inputBox.value;
    listData = `<li>` + userValue + `</li>`;
  } else {
    listData = list.join("");
    dataBox.innerHTML = listData;
  }
}
// console.log(example, data);

const btnName = document.getElementById("btnName");
btnName.addEventListener("click", function () {
  const namePokemon = document.getElementById("namePokemon").value;
  const result = document.getElementById("result");
  const resultData = searchPokemon(namePokemon, datapokemon);
  const pokemonList = resultData.map(function (pokemon) {
    return `<li class="container">
              <p class="namePokemon">${pokemon.name} </p>
              <p class="numPokemon">${pokemon.num} </p>
              <img class= "imgPokemon" src="${pokemon.img}">
              <p class= "aboutPokemon"> ${pokemon.about}</p>
              <div class="generationPokemon"><p>${pokemon.generation.num}</p><br>
              <p> Región: ${pokemon.generation.name} </p></div>
              <div class="statsPokemon"><p> Ataque: ${pokemon.stats["base-attack"]}</p><br>
              <p> Defensa: ${pokemon.stats["base-defense"]}</p></div>
              </li>`;
  });
  result.innerHTML = `${pokemonList}`;
  // document.getElementById('result').innerHTML=resultData[0].name;
  // document.getElementById('result__1').innerHTML=resultData[0].about;
  // document.getElementById('result__2').innerHTML=resultData[0].generation.num;
  // document.getElementById('result__3').innerHTML=resultData[0].stats['base-attack'];
});

const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", function () {
  // const namePokemon = datapokemon;
  const resultBackCard = document.getElementById("resultBackCard");
  const resultDataPokemon = searchPokemonType(typePokemon, datapokemon );
  const pokemonListBack = resultDataPokemon.map(function (pokemon) {
    return `<li class="backContainer">
              <p class="namePokemon">${pokemon.name} </p>
              <p class="numPokemon">${pokemon.num} </p>
              <img class= "rarityPokemon" src="${pokemon.pokemon-rarity}">
              <p class= "typePokemon"> ${pokemon.type}</p>
              <div class="resistantPokemon"><p>${pokemon.resistant[0, 1, 2, 3, 4]}</p><br>
              <p> Región: ${pokemon.generation.name} </p></div>
              <div class="statsPokemon"><p> Ataque: ${pokemon.stats["base-attack"]}</p><br>
              <p> Defensa: ${pokemon.stats["base-defense"]}</p></div>
              </li>`;
  });
  resultBackCard.innerHTML = `${pokemonListBack}`;
});
