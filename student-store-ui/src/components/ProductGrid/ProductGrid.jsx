import React from "react"
import "./ProductGrid.css" 
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ products }) {
    return (
        <div className="ProductGrid" >
            <div className="gridContainer">
            {products.map((product) => (
                <ProductCard key = { product.id} product = {product}/>
                ))}
                </div>
        </div>
    );
};