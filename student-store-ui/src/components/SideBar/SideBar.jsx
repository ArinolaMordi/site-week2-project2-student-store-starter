import React from "react";
import "./SideBar.css";

export default function SideBar(props) {
  const{
    isOpen,
    products,
    shoppingCart,
    handleOnToggle,
  }= props;
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
  
        {/* <button className="icon-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">add_shopping_cart</i>
        </button>
  
        <button className="icon-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">monetization_on</i>
        </button>
  
        <button className="icon-button" onClick={handleOnToggle}>
          <i className="material-icons md-48">fact_check</i>
        </button> */}
      </div>
    
    )}
       
    </section>
   
  );
}

