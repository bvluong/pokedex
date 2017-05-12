import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_SINGLE_POKEMON = "RECEIVE_SINGLE_POKEMON";
export const CREATE_POKEMON = "CREATE_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const receiveNewPokemon = pokemon => ({
  type: CREATE_POKEMON,
  pokemon
});


export const requestAllPokemon = () => dispatch => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = ( id ) => dispatch => (
  APIUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(receiveSinglePokemon(pokemon)))
);
export const createNewPokemon = ( pokemonDetails ) => dispatch => (
  APIUtil.createPokemon(pokemonDetails)
    .then(pokemon => dispatch(receiveNewPokemon(pokemon)))
);
