import * as React from "react"
import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ProductCard from "../ProductCard/ProductCard"
export default function ProductDetails() {
  const { id } = useParams();
  
  const [product, setProduct] = useState({});

  const url = `https://codepath-store-api.herokuapp.com/store/${id}`;

  async function fetchProducts() {
    
    const response = await fetch(url);
    let existingData = await response.json();
    existingData = existingData.product;
    setProduct(existingData);
  }
  useEffect(() => {
    fetchProducts();
  }, [])
  return (
    <ProductCard product={product} />
  )
}
