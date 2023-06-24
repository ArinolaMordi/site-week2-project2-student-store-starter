import React from "react"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"
import About from "../About Us/About Us"
import Contact from "../Contact Us/Contact Us"
import Footer from "../Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetails from "../ProductDetails/ProductDetails"



export default function App() {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState("All categories");

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = await fetch('https://codepath-store-api.herokuapp.com/store');
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    // Filter the products based on the search term
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the filtered products state
    setFilteredProducts(filteredProducts);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    if (category === "All categories") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => {
          return (product.category === category.toLowerCase())
        });
      console.log("filtered products: ", filteredProducts)
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home />
          <Categories selectCategory={handleSelectCategory} />
          <Search onSearch={handleSearch} />

          <Routes>
            <Route path="/" element={<ProductGrid products={filteredProducts} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>

          <About />
          <Contact />
          <Footer />
        </main>


      </BrowserRouter>
    </div>
  );
}

