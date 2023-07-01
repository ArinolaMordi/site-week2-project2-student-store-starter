import * as React from 'react';
import App from '../App/App';
import Checkout from '../Checkout/Checkout';


export default function ShoppingCart(props) {
    const { isOpen, shoppingCart, products } = props;

    const getProductName = (itemId) => {
        const product = products.find((item) => item.id === itemId);
        return product ? product.name : "";
    };
    const getProductPrice = (itemId) => {
        const product = products.find((item) => item.id === itemId);
        return product ? product.price : 0;
    }
    const getProductCost = (itemId, quantity) => {
        const price = getProductPrice(itemId)
        return price * quantity;
    };
    const cost = shoppingCart.reduce((total, item) => {
        const cost = getProductCost(item.itemId, item.quantity);
        return total + cost;
    }, 0);
    const subtotal = shoppingCart.reduce((total, item) => {
        const price = getProductPrice(item.itemId);
        return total + price * item.quantity;
    }, 0);
    const taxRate = 0.24;
    const tax = subtotal * taxRate;
    const Total = subtotal + tax;
    return (
        <div className='table'>
            Receipt
            {shoppingCart.map((item) => (
                <p key={item.itemId}>

                    You have purchased  {item.quantity} of {getProductName(item.itemId)}  at ${getProductCost(item.itemId, item.quantity)} </p>
            ))}
            <p>
                Your  subtotal is ${subtotal} with a tax rate of ${tax} your total is  ${Total}
            </p>

        </div>

    );
}
