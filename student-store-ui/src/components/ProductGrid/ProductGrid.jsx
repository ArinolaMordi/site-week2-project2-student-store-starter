import React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import { Link } from "react-router-dom";
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton"

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemFromCart
 }) {
    return (
        <div className="ProductGrid" >
             
            <div className="gridContainer">
                {products.map((product) => (
                    <Link key={product.id} to={`product/${product.id}`}>
                        <ProductCard key={product.id} product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/> 
                    </Link> 
                    
                   
                ))}
            </div>
        </div>
    );
};