import React from "react"
import "./ProductCard.css"


export default function ProductCard(props) {
  const product = props["product"]

  return (
    <div className="productCard">

      <img src={product.image} alt={product.name} />
      <h4> {product.name} </h4>
      <div> $ {product.price}</div>
      <div>{product.category}</div>

    </div>
  )
}

