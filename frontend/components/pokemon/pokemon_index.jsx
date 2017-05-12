import React from 'react';
import PokemonIndexItem from "./pokemon_index_item";
import PokemonDetailContainer from './pokemon_detail_container';
import { Route, Link } from 'react-router-dom';
import PokemonFormContainer from "./pokemon_form_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke =>
       <PokemonIndexItem key={poke.id} pokemon={poke}/> );
    return (
        <section className="pokedex">
          <Link to="/" className="create-pokemon-button">
            <button>Create Pokemon</button>
          </Link>
          <ul>
            {pokemonItems}
          </ul>
        <Route path='/pokemon/:pokemonId' component={PokemonDetailContainer}/>
        <Route exact path="/" component={PokemonFormContainer}/>
        </section>

    );
  }
}

export default PokemonIndex;
