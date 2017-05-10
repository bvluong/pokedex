import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import selectAllPokemon from './reducers/selectors';
import { requestAllPokemon } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store = configureStore();
  window.store = store;
  window.selectAllPokemon = selectAllPokemon;
  window.requestAllPokemon = requestAllPokemon;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
