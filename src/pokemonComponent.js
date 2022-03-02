export function pokemonComponent(pokemon) {
    return `<li class="container">
          <p class="namePokemon">${pokemon.name} </p>
          <p class="numPokemon">${pokemon.num} </p>
          <img class= "imgPokemon" src="${pokemon.img}">
          <p class= "aboutPokemon"> ${pokemon.about}</p>
          <div class="generationPokemon"><p>Generación: ${pokemon.generation.num}</p><br>
          <p> Región: ${pokemon.generation.name} </p></div>
          <div class="statsPokemon"><p> Ataque: ${pokemon.stats["base-attack"]}</p><br>
          <p> Defensa: ${pokemon.stats["base-defense"]}</p></div>
          </li>`;
}


export function pokemonBackComponent(pokemon) {
    return `<li class="backContainer">
        <p class="namePokemonBack">${pokemon.name}</p>
        <p class="numPokemonBack">${pokemon.num}</p>
        <p class="typePokemonBack"> Tipo: ${pokemon.type} </p>
        <p class= "sizePokemonBack"> Altura: ${pokemon.size.height}, Peso: ${pokemon.size.weight}</p>
        <div class="resistantPokemon"><p> Resistencia: ${pokemon.resistant.join(' , ')}</p></div>
        <div class="weaknessesPokemon"><p> Debilidades: ${pokemon.weaknesses.join(',')}</p></div>
        <div class="rarityPokemon"><p> Rareza: ${pokemon['pokemon-rarity']}</p><div>
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