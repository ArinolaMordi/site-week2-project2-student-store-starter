import * as React from 'react';
import "./ShoppingCart.css";
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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Cost</th>
                    </tr>
                </thead>

                <tbody>
                    {shoppingCart.map((item) => (
                        <tr key={item.itemId}>
                            <td>{getProductName(item.itemId)}</td>
                            <td>{item.quantity}</td>
                            <td>{getProductPrice(item.itemId)}</td>
                            <td>{getProductCost(item.itemId, item.quantity)}</td>
                        </tr>
                    ))}
                </tbody>

            </table>

            <div>
                <table>
                    <tfoot>
                        <tr>
                            <td>Subtotal:</td>
                            <td>{subtotal}</td>
                        </tr>
                        <tr>
                            <td>Taxes:</td>
                            <td>{tax}</td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td>{Total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );


}

