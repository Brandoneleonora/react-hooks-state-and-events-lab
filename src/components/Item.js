import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handlingCart(){
    setInCart((inCart) => !inCart)
  }

  return (
    <li className={inCart? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handlingCart}>{inCart? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
