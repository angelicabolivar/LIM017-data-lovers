export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';
};

export const searchPokemon = (namePokemon, datapokemon) => {
    const resultPokemon = datapokemon.pokemon.filter(x => x.name === namePokemon);
    console.log(resultPokemon);
    return resultPokemon;
};