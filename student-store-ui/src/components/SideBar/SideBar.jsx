import React from "react";
import "./SideBar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function SideBar(props) {
    const {
        isOpen,
        products,
        shoppingCart,
        handleOnToggle,
    } = props;
    return (
        <section className="sidebar">
            {!isOpen && (
                <div className="sidebar-close">
                    <button className="icon-button" onClick={handleOnToggle}>
                        <i className="material-icons md-48">arrow_forward</i>
                    </button>

                    <button className="icon-button" onClick={handleOnToggle}>
                        <i className="material-icons md-48">add_shopping_cart</i>
                    </button>

                    <button className="icon-button" onClick={handleOnToggle}>
                        <i className="material-icons md-48">monetization_on</i>
                    </button>

                    <button className="icon-button" onClick={handleOnToggle}>
                        <i className="material-icons md-48">fact_check</i>
                    </button>
                </div>
            )}
            {isOpen && (
                <div className="sidebar-open">
                    <button className="icon-button" onClick={handleOnToggle}>
                        <i className="material-icons md-48">arrow_back</i>
                    </button> 

                    <div className="shoppingcart"> Shopping Cart  <i className="material-icons md-48">add_shopping_cart</i> </div>
                    <ShoppingCart shoppingCart={shoppingCart} isOpen = {isOpen} products={products} /> 

                    <div className="monetization"> 
                       <h1> Payment Info <i class="material-icons md-48">monetization_on</i> </h1> 
                      <h1 className="name">Name</h1> <input type="text" placeholder="Student Name"/>
                      <h1 className="email">Email</h1> <input type="text" placeholder="Student@codepath.org"/>
                      
                    </div>
                    <input type="checkbox"/> <h4>I agree to the terms and conditions</h4>
                     <button className="checkoutbtn"> Check Out </button>

                     <div className="factCheck"> 
                     <h1> Checkout Info <i class="material-icons md-48">fact_check</i> </h1> 
                     <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
                     </div>
                    </div>
                   
            
            )}

        </section>

    );
}
 