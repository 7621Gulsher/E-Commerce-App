import React, { useContext, useState } from "react";
import { AppContext } from "./App";

const Cart = () => {
  const { cart, setCart, showCart, setShowCart, total, setTotal } =
    useContext(AppContext);
  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-all">
          {cart.map((item: any) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-imgContainer">
                  <img className="cart-img" src={item.imgUrl} alt={item.name} />
                </div>

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <h4>${item.price}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-footer">
          <h3>Total: ${total}</h3>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
          <button
            className="close-button"
            onClick={() => setShowCart(!showCart)}
          >
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
