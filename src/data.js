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