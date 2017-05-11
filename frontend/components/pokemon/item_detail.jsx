import React from 'react';

const ItemDetail = ({ itemdetail }) => (
  <section className='item-detail'>
    <ul>
      <li> <h3> {itemdetail.name} </h3> </li>
      <li> Happiness: { itemdetail.happiness } </li>
      <li> Price: { itemdetail.price } </li>
    </ul>
  </section>
);

export default ItemDetail;
