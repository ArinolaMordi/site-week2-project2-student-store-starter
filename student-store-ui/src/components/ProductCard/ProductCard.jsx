import React from "react"
import "./ProductCard.css"


export default function ProductCard(props) {
    const product = props["product"]

    return (
        <div className="productCard">
            {/* Switch line 7 to an img element.Dont forget the src and alt data. */}
            <img src={product.image} alt={product.name} />
            <h4> {product.name} </h4>
            <div> $ {product.price}</div>
            <div>{product.category}</div>

        </div>
    )
}

