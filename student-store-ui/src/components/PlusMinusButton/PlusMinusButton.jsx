import React from "react";
import { useEffect, useState } from "react" ; 
function PlusMinusButton ({
    // product,
    productId,
    handleAddItemToCart,
    handleRemoveItemFromCart
}) {
const [count, setCount] = useState(0);

const handleClick = () => { 
    
    setCount ((prevCount) => prevCount +1); 
};
const handleDecrement = () => {
    
    setCount ((prevCount) => prevCount -1);
} ; 
 useEffect (() => {
 }, [count]);

//  console.log("fn",handleAddItemToCart);
 return (
    <div className="Buttons"> 
    <button className="add" onClick={() =>  {handleClick(); handleAddItemToCart(productId)}}>
        <div className="plusIcon">+</div>
    </button>
    <button className="remove" onClick={() =>  {handleDecrement(); handleRemoveItemFromCart(productId)}} >
        <div className="minusIcon"> - </div>
    </button>
    <p className="amount">
        {count >= 1 ? <span>{count}</span> : null}
    </p>
    </div>
 );
 }
 export default PlusMinusButton ; 
