export const searchPokemon = (namePokemon, datapokemon) => {
    if (!namePokemon) throw new TypeError('No ingresaste ningun valor de texto');
    if (typeof namePokemon !== "string") throw new TypeError("El valor ingresado no es texto");
    if (typeof datapokemon !== "object") throw new TypeError("El valor ingresado no es una data valida");
    const resultPokemon = datapokemon.pokemon.filter(x => x.name === namePokemon);
    // if (!resultPokemon) throw new TypeError(`No se encontro pokemon ${namePokemon}`);
    return resultPokemon;
};

export const topPokemon = (datapokemon) => {
    if (!datapokemon) throw new TypeError('No estas ingresando ningun valor');
    if (typeof datapokemon !== "object") throw new TypeError("El valor ingresado no es una data valida");
    return datapokemon.pokemon.sort((a, b) => {
        if (a['spawn-chance'] < b['spawn-chance']) { return 1 }
        if (a['spawn-chance'] > b['spawn-chance']) {
            return -1;
        }
        // // a must be equal to b
        return 0;

    }).slice(0, 10)
};

export const cpPokemon = (pokemon1, pokemon2) => {

    if (parseInt(pokemon1.stats['max-cp']) > parseInt(pokemon2.stats['max-cp'])) {
        return pokemon1;
    }
    if (parseInt(pokemon1.stats['max-cp']) < parseInt(pokemon2.stats['max-cp'])) {

        return pokemon2;
    }
    return pokemon1

}

export const filterGeneration = (datapokemon, generation) => {

    const resultFilterPokemon = datapokemon.pokemon.filter(x => x.generation.num === generation);

    return resultFilterPokemon;
};


export const filterType = (inputData, inputType) => {


    const resultFilter = inputData.filter(x => x.type.includes(inputType));

    return resultFilter;
}


export const percentage = (amount, total) => {
    return Math.round((amount * 100) / total);
}