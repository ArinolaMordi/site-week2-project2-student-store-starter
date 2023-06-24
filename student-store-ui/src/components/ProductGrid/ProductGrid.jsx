import React from "react"
import "./ProductGrid.css" 
import ProductCard from "../ProductCard/ProductCard"
import { Link } from "react-router-dom";

export default function ProductGrid({ products }) {
    return (
        <div className="ProductGrid" >
            <div className="gridContainer">
            {products.map((product) => (
                <Link key={product.id} to={`product/${product.id}`}>
                    <ProductCard key = {product.id} product = {product}/>
                </Link>
                ))}
                </div>
        </div>
    );
};