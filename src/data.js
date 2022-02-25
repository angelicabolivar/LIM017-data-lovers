export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

export const searchPokemon = (namePokemon, datapokemon ) => {
  const resultPokemon = datapokemon.pokemon.filter(x => x.name === namePokemon );
return resultPokemon;
};

export const searchPokemonType = (typePokemon, datapokemon ) => {
  const resultPokemontype = datapokemon.pokemon.filter(x => x.type === typePokemon );
return resultPokemontype;
};
