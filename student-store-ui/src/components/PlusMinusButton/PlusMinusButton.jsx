import React from "react";
import { useEffect, useState } from "react" ; 
function CounterButton ({
    product,
    productId,
    handleAddItemToCart,
    handleRemoveItemFromCart

}) {
const [count, setCount] = useState(0);

const handleClick = () => { 
    handleAddItemToCart(productId)
    setCount ((prevCount) => prevCount +1); 
};
const handleDecrement = () => {
    handleRemoveItemFromCart(productId)
    setCount ((prevCount) => prevCount -1);
} ; 
 useEffect (() => {
 }, [count]);

 return (
    <div className="Buttons"> 
    <button className="add" onClick={() =>  {handleClick()}}>
        <div className="plusIcon">+</div>
    </button>
    <button className="remove" onClick={() =>  {handleDecrement()}} >
        <div className="minusIcon"> - </div>
    </button>
    <p className="amount">
        {count >= 1 ? <span>{count}</span> : null}
    </p>
    </div>
 );
 }
 export default CounterButton ; 
