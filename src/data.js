export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

export const searchPokemon = (namePokemon, datapokemon) => {
    if (!namePokemon) throw new TypeError('No ingresaste ningun valor de texto');
    if (typeof namePokemon !== "string") throw new TypeError("El valor ingresado no es texto");
    if (typeof datapokemon !== "object") throw new TypeError("El valor ingresado no es una data valida");
    const resultPokemon = datapokemon.pokemon.filter(x => x.name === namePokemon);
    return resultPokemon;
};

export const topPokemon = (datapokemon) => {
    return datapokemon.pokemon.sort((a, b) => {
        if (a['spawn-chance'] < b['spawn-chance']) {
            return 1
        }
        if (a['spawn-chance'] > b['spawn-chance']) {
            return -1;
        }
        // // a must be equal to b
        return 0;

    }).slice(0, 10)
};