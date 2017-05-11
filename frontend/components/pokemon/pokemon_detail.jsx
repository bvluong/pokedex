import React from 'react';
import { Route } from 'react-router-dom';
import values from 'lodash/values';
import ItemDetailContainer from './item_detail_container';
import PokemonDetailInformation from './pokemon_detail_info';
import PokemonDetailItem from './pokemon_detail_item';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render () {
    const { pokemondetail } = this.props;
    const { name,
      poke_type,
      attack,
      defense,
      moves,
      items,
      image_url} = pokemondetail;

    return (
      <div className="pokemon-detail">
        <figure>
          <img src={image_url}></img>
        </figure>

        <PokemonDetailInformation pokemondetail={pokemondetail} />

        <section className='pokemon-item'>
          <h3>Items</h3>
          <PokemonDetailItem pokemondetail={pokemondetail} />

          <Route path="/pokemon/:pokemonId/item/:itemId"
          component={ItemDetailContainer}/>
        </section>

      </div>
    );
  }
}

export default PokemonDetail;
