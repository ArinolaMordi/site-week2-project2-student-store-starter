import React, {useState} from "react"
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
import SideBar from "../SideBar/SideBar"


export default function App() {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState("All categories");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([])

  const handleAddItemToCart = (productId) => {
    let isProductInCart = false;
    const newShoppingCart = shoppingCart.map((item) => {
      if (item && item.itemId === productId){
        isProductInCart = true;
        item.quantity += 1;
      }
      return item;
    });
    if (isProductInCart) {
      setShoppingCart(newShoppingCart);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    }
    console.log("!!!", shoppingCart);
  };

  const handleRemoveItemFromCart = (productId) => {
    const newShoppingCart = shoppingCart.map((item) => {
      if (item.itemId === productId) {
        item.quantity -= 1;
      }
      return item;
    });
    console.log("!!", shoppingCart);
    setShoppingCart(newShoppingCart.filter((item) => item.quantity !== 0));
  };
  
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

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  }

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
      
      setFilteredProducts(filteredProducts);
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          
          <Navbar />
          <SideBar 
            isOpen={isOpen} 
            handleOnToggle={handleOnToggle}
            products={products}
            shoppingCart={shoppingCart}
          />
          <Home />
          <Categories selectCategory={handleSelectCategory} />
          <Search onSearch={handleSearch} />

          <Routes>
            <Route path="/" element={<ProductGrid products={filteredProducts} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>} />
            <Route path="/product/:id" element={<ProductDetails handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}/>}  /> 
         </Routes>


          <About />
          <Contact />
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

