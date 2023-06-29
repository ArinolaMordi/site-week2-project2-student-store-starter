import React from "react"
import "./ProductCard.css"
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton"


export default function ProductCard({
  product,productId,handleAddItemToCart,handleRemoveItemFromCart
}) {

  return (
    <div className="productCard">

      <img src={product.image} alt={product.name} />
      <h4> {product.name} </h4>
      <div> $ {product.price}</div>
      <div>{product.category}</div>
      <PlusMinusButton  productId={productId} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>
      
      

    
    </div>
  )
}


