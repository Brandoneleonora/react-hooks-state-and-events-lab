import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [item, setItem] = useState(items)


  function filterState(event){
    setSelectedCategory(event.target.value)
  }
  
  const foodsToDisplay = item.filter((food) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return food.category === selectedCategory;
    }})
  
  console.log(items)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterState}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
