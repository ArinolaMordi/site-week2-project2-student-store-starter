import React from "react"
import "./ProductCard.css"


export default function ProductCard (props){

    console.log("I'm in the ProductCard. Props is below")
    console.log(props)

    // const product = props.product
    console.log(props.name)
    const product = props["product"]

    return (
        <div className="productCard">          
            {/* Switch line 7 to an img element.Dont forget the src and alt data. */}
        <img src={product.image} alt={product.name}/>
        <h4> {product.name} </h4>
        <div> $ {product.price}</div>
        <div>{product.category}</div>
        
        </div>
    )
}

// export default function ProductCard ({ product }){
//     return (
//         <div className="productCard">          
//             {/* Switch line 7 to an img element.Dont forget the src and alt data. */}
//         <img src={product.image} alt={product.name}/>
//         <h4> {product.name} </h4>
//         <div> $ {product.price}</div>
//         <div>{product.category}</div>
        
//         </div>
//     )
// }