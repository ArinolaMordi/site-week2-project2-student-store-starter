import React from "react"
import "./ProductCard.css"
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton"
import { Link } from "react-router-dom";



export default function ProductCard({
  product, productId, handleAddItemToCart, handleRemoveItemFromCart
}) {
  return (
    <div className="productCard">
 <Link key={product.id} to={`product/${product.id}`}> 
      <img src={product.image} alt={product.name} />
      </Link>
      <h4> {product.name} </h4>
      <div> $ {product.price}</div>
      <div>{product.category}</div>
      <PlusMinusButton productId={productId} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />




    </div>
  )
}


