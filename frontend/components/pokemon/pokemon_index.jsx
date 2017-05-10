import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const { pokemon } = this.props;
    return (
      <ul>
        { pokemon.map( (poke) =>
            <li key={poke.id}>
              <img src={poke.image_url}/>
            </li>) }
      </ul>
    );
  }
}

export default PokemonIndex;
