export function pokemonComponent(pokemon) {
    return `<li class="container">
          <p class="namePokemon">${pokemon.name} </p>
          <p class="numPokemon">${pokemon.num} </p>
          <img class= "imgPokemon" src="${pokemon.img}">
          <p class= "aboutPokemon"> ${pokemon.about}</p>
          <div class="generationPokemon"><p>${pokemon.generation.num}</p>
          <p> Región: ${pokemon.generation.name} </p></div>
          <div class="statsPokemon"><p> Ataque: ${pokemon.stats["base-attack"]}</p>
          <p> Defensa: ${pokemon.stats["base-defense"]}</p></div>
          </li>`;
}


export function pokemonBackComponent(pokemon) {
    return `<li class="backContainer">
        <p class="namePokemon">${pokemon.name}</p>
        <p class="namePokemon">${pokemon.num}</p>
        <p class="typePokemon"> type ${pokemon.type} </p>
        <p class= "sizePokemon"> height,weight ${pokemon.size.height}  ${pokemon.size.weight}</p>
        <div class="resistantPokemon"><p> resistant ${pokemon.resistant.join(' , ')}</p>
        <div class="weaknessesPokemon"><p> weaknesses ${pokemon.weaknesses.join(',')}</p>
        <div class="rarityPokemon"><p> pokemon-rarity ${pokemon['pokemon-rarity']}</p><div>
        </li>`;
}

export function pokemonList(pokemon) {
    return `<li class="ListContainer">
        <img src="${pokemon.img}" class="imagePokemon"/>
        <div class="cardRigth">
        <div class="titleCard">
        <p class="nameNPokemon">${pokemon.name}</p>
        <p class="numberPokemon">${pokemon.num}</p>
        </div>
        <p class="tPokemon">Type: ${pokemon.type}</p>
        <p class="spawn-chance">Spawn-chance: ${pokemon['spawn-chance']}</p>
        </div
        </li>`;
}