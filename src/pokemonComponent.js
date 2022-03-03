export function pokemonComponent(pokemon) {
    return `<li class="container">
          <p class="namePokemon">${pokemon.name} </p>
          <p class="numPokemon">${pokemon.num} </p>
          <img class= "imgPokemon" src="${pokemon.img}">
          <p class= "aboutPokemon"> ${pokemon.about}</p>
          <div class="generationPokemon"><p>Generation: ${pokemon.generation.num}</p>
          <p> Region: ${pokemon.generation.name} </p></div>
          <div class="statsPokemon"><p> Base-attack: ${pokemon.stats["base-attack"]}</p>
          <p> Base-Defense: ${pokemon.stats["base-defense"]}</p></div>
          </li>`;
}


export function pokemonBackComponent(pokemon) {
    return `<li class="backContainer">
        <p class="namePokemonBack">${pokemon.name}</p>
        <p class="numPokemonBack">${pokemon.num}</p>
        <p class="typePokemonBack"> Type: ${pokemon.type} </p>
        <p class= "sizePokemonBack"> Height: ${pokemon.size.height}</p>
        <p class= "weightPokemon" > Weight: ${pokemon.size.weight}</p>
        <div class="resistantPokemon"><p> Resistant: ${pokemon.resistant.join(' , ')}</p></div>
        <div class="weaknessesPokemon"><p> Weaknesses: ${pokemon.weaknesses.join(',')}</p></div>
        <div class="rarityPokemon"><p> Pokemon-Rarity: ${pokemon['pokemon-rarity']}</p><div>
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