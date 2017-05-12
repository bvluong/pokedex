import React from 'react';
import merge from 'lodash/merge';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attack: "",
      defense: "",
      image_url: "",
      name: "",
      poke_type: "bug",
      move1: "",
      move2: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault;
    const {move1, move2} = this.state;
    const newState = merge({}, this.state, {moves: [move1,move2]});
    console.log(newState);
    this.props.createNewPokemon(newState);
  }

  render(){
    const TYPES = [
      "fire",
      "electric",
      "normal",
      "ghost",
      "psychic",
      "water",
      "bug",
      "dragon",
      "grass",
      "fighting",
      "ice",
      "flying",
      "poison",
      "ground",
      "rock",
      "steel"
    ].sort();

    return (
      <div className="pokemon-detail">
        <img src="./assets/pokemon-logo.svg"/>
        <form className="create-pokemon-form" onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("name")}
            placeholder="Name" value={this.state.name}/>
          <input type="text" onChange={this.update("image_url")}
            placeholder="Image_Url" value={this.state.image_url}/>

          <select onChange={this.update("poke_type")}>
            {TYPES.map( (type,idx) => <option key={idx}> {type} </option> )}
          </select>

          <input type="number" onChange={this.update("attack")}
            placeholder="Attack" value={this.state.attack}/>
          <input type="number" onChange={this.update("defense")}
            placeholder="Defense" value={this.state.defense}/>

          <input type="text" onChange={this.update("move1")}
            placeholder="Move 1" value={this.state.move1}/>
          <input type="text" onChange={this.update("move2")}
            placeholder="Move 2" value={this.state.move2}/>

          <button type="submit">Create Pokemon</button>

        </form>
      </div>
    );
  }
}

export default PokemonForm;
