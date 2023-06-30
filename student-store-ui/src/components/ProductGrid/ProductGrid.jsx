import React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"
import PlusMinusButton from "../PlusMinusButton/PlusMinusButton"

export default function ProductGrid({ products, handleAddItemToCart, handleRemoveItemFromCart
}) {
    // console.log("fn in Grid",handleAddItemToCart);
    return (
        <div className="ProductGrid" >

            <div className="gridContainer">
                {products.map((product) => (
                   
                        <ProductCard key={product.id} productId={product.id} product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
                


                ))}
            </div>
        </div>
    );
};