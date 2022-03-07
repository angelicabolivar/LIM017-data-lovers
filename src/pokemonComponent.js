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
        <progress id="file" max="7.12" value="${pokemon['spawn-chance']}"></progress>
        </div
        </li>`;
}
export function cpResultPokemon1(pokemon) {
    return `<li class="container">
    <p class="namePokemonCp">${pokemon.name} </p>
    <p class="numPokemonCp">${pokemon.num} </p>
    <img class= "imgPokemonCp" src="${pokemon.img}">
    <p class="base-attack">Base-attack: ${pokemon.stats['base-attack']}</p>
    <p class="base-defense">Base-defense: ${pokemon.stats['base-defense']}</p>
    <p class="base-stamina">Base-stamina: ${pokemon.stats['base-stamina']}</p>
    <p class="max-cp">Max-cp: ${pokemon.stats['max-cp']}</p>
    <p class="max-hp">Max-hp: ${pokemon.stats['max-hp']}</p>
    </li>`
}
export function cpResultPokemon2(pokemon) {
    return `<li class="container">
    <p class="namePokemonCp">${pokemon.name} </p>
    <p class="numPokemonCp">${pokemon.num} </p>
    <img class= "imgPokemonCp" src="${pokemon.img}">
    <p class="base-attack">Base-attack: ${pokemon.stats['base-attack']}</p>
    <p class="base-defense">Base-defense: ${pokemon.stats['base-defense']}</p>
    <p class="base-stamina">Base-stamina: ${pokemon.stats['base-stamina']}</p>
    <p class="max-cp">Max-cp: ${pokemon.stats['max-cp']}</p>
    <p class="max-hp">Max-hp: ${pokemon.stats['max-hp']}</p>
    </li>`
}

export function cpResultListName(pokemon) {
    return `<li>
    <p class='mayorPokemonCp'>The highest CP is: ${pokemon.stats['max-cp']}</p>
    </li>`
}

export function generationiFilteri(pokemon) {
    return `<li>
    <img class= 'imgPokemonGeneration' src="${pokemon.img}">
    <p class='namePokemonGeneration'>Name: ${pokemon.name}</p>
    <p>Region: ${pokemon.generation.name}</p>
    <p>Type: ${pokemon.type}</p>
    </li>`
}
export function generationiiFilterii(pokemon) {
    return `<div>
    <img class= 'imgPokemonGeneration' src="${pokemon.img}">
    <p class='namePokemonGeneration'>Name: ${pokemon.name}</p>
    <p>Region: ${pokemon.generation.name}</p>
    <p>Type: ${pokemon.type}</p>
    </div>`
}