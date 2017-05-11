import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  const pokeItems = state.pokemonDetail.items;
  const Item = pokeItems.filter( item => item.id === parseInt(itemId)) ;
  return (Item[0] || {});
};
