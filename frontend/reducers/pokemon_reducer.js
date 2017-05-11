import { RECEIVE_ALL_POKEMON, CREATE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({},state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge(newState,action.pokemon);
    case CREATE_POKEMON:  
      return merge(newState, action.pokemon);
    default:
      return state;
  }
};

export default pokemonReducer;
