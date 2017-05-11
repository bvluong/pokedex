import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';


document.addEventListener('DOMContentLoaded', () => {

  let store = configureStore();
  window.store = store;

  const Root = () => (
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={ PokemonIndexContainer }/>
      </HashRouter>
    </Provider>
  );

  const rootEl = document.getElementById('root');

  ReactDOM.render(<Root store={store}/>, rootEl);
});
