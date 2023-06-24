import React from "react";
import "./categories.css"

export default function Categories({ selectCategory }) {
  function handleClick(category) {
    console.log(`Clicked on: ${category}`);
    selectCategory(category);
  }
  return (

    <div className="categoriesBtn">

      <ul>
        <li>
          <button onClick={() => handleClick("All categories")}>All categories</button>
        </li>
        <li>
          <button onClick={() => handleClick("Clothing")}>Clothing</button>
        </li>
        <li>
          <button onClick={() => handleClick("Food")}>Food</button>
        </li>
        <li>
          <button onClick={() => handleClick("Accessories")}>Accessories</button>
        </li>
        <li>
          <button onClick={() => handleClick("Tech")}>Tech</button>
        </li>
      </ul>
    </div>
  );
}





