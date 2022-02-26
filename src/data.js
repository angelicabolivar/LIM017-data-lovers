export const searchPokemon = (namePokemon, datapokemon ) => {
  const resultPokemon = datapokemon.pokemon.filter(x => x.name === namePokemon);
return resultPokemon;
};
