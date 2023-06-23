import React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css" 
import ProductGrid from "../ProductGrid/ProductGrid"


export default function App() {
  // return (
  //   <div className="app">
  //     <BrowserRouter>
  //       <main>
  //         {function Home() {
  const [products, setProducts] = React.useState([]);
   
  React.useEffect(() => {
    // const fetchProducts = async () => {
      // .then((response) => setProducts(response))
      // .catch((error) => console.log(error));
      // }, []);

      // Function to fetch the products from the API
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://codepath-store-api.herokuapp.com/store');
          const data = await response.json();
          setProducts(data.products);
          console.log(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }, [] );

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Home />
          <ProductGrid products={products}/> 
          
        </main>
      </BrowserRouter>
    </div>
  );
}

// import "./ProductCard.css"

// export default function ProductCard ({ product }){
//     return (
//         <div className="product-card">          
//             {/* Switch line 7 to an img element.Dont forget the src and alt data. */}
//         {/* <img src={product.image} alt={product.name}/> */}
//         <h4> {product.name} </h4>
//         <div>{price}</div>
//         <div>{category}</div>
//         </div>
//     )
// }

// img, name ,price,category 

// import * as React from "react"
// import "./ProductGrid.css" 
// import ProductCard from "../productCard/productCard"

// export default function ProductGrid({ products }) {
//     return (
//         <div className="ProductGrid" >
//             {products.map((product) => (
//                 <ProductCard key = { product.id} product = {product}/>
//                 ))}
//         </div>
//     );
// };