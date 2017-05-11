import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      let newState = merge({},state);
      return merge(newState,action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
