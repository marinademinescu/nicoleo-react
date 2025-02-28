import { useState } from 'react';

const ItemList = ({items}) => {
  

  return (
    <ul>
      {items.map((fruit, index) => (
        <li key={`fruits-items-${index}`}>{fruit}</li>
      ))}
    </ul>
  );
};

export default ItemList;
