import value from 'lodash/value';

const selectAllPokemon = (state) => {
  let array = [];
  Object.keys(state.pokemon).forEach( (poke_id) => array.push(state.pokemon[poke_id]) );
  return array;
};

export default selectAllPokemon;
