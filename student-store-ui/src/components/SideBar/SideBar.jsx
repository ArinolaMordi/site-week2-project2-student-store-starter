import React from "react";
import "./SideBar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Checkout from "../Checkout/Checkout";


export default function SideBar(props) {
    const {
        isOpen,
        products,
        shoppingCart,
        handleOnToggle,
    } = props;
    const [checkoutClicked, setCheckoutClicked] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [agreed, setAgreed] = React.useState(false);
    const handleCheckout = () => {
        if (name.trim() === "" || email.trim() === "") {
            alert("Please enter your name and email.");
            return;
        }

        if (!agreed) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        setCheckoutClicked(true);
    };

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
                    {checkoutClicked ? (
                        <p>Your cart is cleared. Thank you for your purchase!</p>
                    ) : shoppingCart.length === 0 ? (
                        <p>No items added to cart yet. Start shopping now!</p>
                    ) : (
                        <ShoppingCart shoppingCart={shoppingCart} isOpen={isOpen} products={products} />
                    )}

                    <div className="monetization">
                        <h1> Payment Info <i className="material-icons md-48">monetization_on</i> </h1>
                        <h1 className="name">Name</h1> <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <h1 className="email">Email</h1> <input type="text" placeholder="Student@codepath.org" value={email} onChange={(e) => setEmail(e.target.value)} />

                    </div>
                    <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} /> <h4>I agree to the terms and conditions</h4>
                    <button className="checkoutbtn" onClick={handleCheckout}> Check Out </button>

                    <div className="factCheck">
                        <h1> Checkout Info <i className="material-icons md-48">fact_check</i> </h1>
                        {checkoutClicked ? null : (
                            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>)}
                        {checkoutClicked && (<Checkout handleCheckout={handleCheckout} shoppingCart={shoppingCart} products={products} />)}
                    </div>




                </div>

            )}

        </section>

    );
}

