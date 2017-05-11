import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const defaultState = {
  items: [],
  moves: []
};

const pokemonDetailReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_POKEMON:
      let newState = merge({},state);
      return merge(newState,action.pokemon);
    default:
      return state;
  }
};

export default pokemonDetailReducer;
