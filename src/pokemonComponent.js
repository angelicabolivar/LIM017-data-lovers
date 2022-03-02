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
        <p class="typePokemonBack"><p>Tipo: ${pokemon.type} </p>
        <p class= "sizePokemonBack"><p> Tamaño: height ${pokemon.size.height} weight ${pokemon.size.weight}</p>
        <div class="resistantPokemon"><p> Resistencia: ${pokemon.resistant.join(' , ')}</p>
        <div class="weaknessesPokemon"><p> Debilidades:  ${pokemon.weaknesses.join(',')}</p>
        <div class="rarityPokemon"><p> Rareza: ${pokemon['pokemon-rarity']}</p>
        </li>`;
}