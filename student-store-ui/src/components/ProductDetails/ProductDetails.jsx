// import './ProductDetails.css'; 
// import { useParams } from 'react-router-dom';
// import { useState , useEffect } from 'react';

// const ProductDetails = () => {
//     const {id} = useParams (); 

//     consr [product , setProduct ] = useState ({}); 

//           useEffect (() => {
//             fetchProduct().then(product => setProduct(product))
//           }
// }
import * as React from "react"
import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductCard from "../ProductCard/ProductCard"
export default function ProductDetails() {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct] = useState({});
    //const [videoUrl, setVideoUrl] =useState("");
    const url = `https://codepath-store-api.herokuapp.com/store/${id}`;

    async function fetchProducts() {
        //console.log("Fetching products")
        const response = await fetch(url);
        console.log('response', response)

        let existingData = await response.json();
        console.log('existingData', existingData)

        existingData = existingData.product;
        console.log('existingData', existingData)
        setProduct(existingData);
        //setParsedData(existingData);
        //images = data.results;
        //console.log(existingData);
    }

    useEffect(() => {
        console.log("useFetch")
        fetchProducts();
        // category.map((category)=>{
        //   <p>category</p>
        // })

    }, [])

    console.log("product", product)

    return (
        <ProductCard product={product} />

        // <ProductCard name={product.name}
        //     image={product.image}
        //     price={product.price}
        // />
    )
}