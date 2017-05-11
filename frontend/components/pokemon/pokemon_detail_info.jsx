import React from 'react';

const PokemonDetailInformation = ({pokemondetail}) => {
  const { name, poke_type, attack, defense, moves} = pokemondetail;
  return (
      <ul>
        <h2>{name}</h2>
        <li>Type: {poke_type}</li>
        <li>Attack: {attack}</li>
        <li>Defense: {defense}</li>
        <li>Moves: {moves.join(", ")}</li>
      </ul>
  );
};

export default PokemonDetailInformation;
