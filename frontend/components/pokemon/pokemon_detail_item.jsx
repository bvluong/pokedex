import React from 'react';
import { Link } from 'react-router-dom';

const PokemonDetailItem = ({ pokemondetail }) => {
  const { items, id } = pokemondetail;
  return (
    <ul>
      {items.map( item =>
        <Link to={`/pokemon/${id}/item/${item.id}`} key={item.id}>
          <li>
            <img src={item.image_url}/>
          </li>
        </Link>
      )}
    </ul>
  );
};

export default PokemonDetailItem;
