import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
      <div className="checkoutProduct">
        <img src="" alt="" className="checkoutProduct__image" />

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">
                Classis Laptiop 
            </p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>20</strong>
            </p>
            <div className="checkoutProduct__rating">
                ⭐⭐⭐
            </div>
            <button>Remove from Basket</button>
        </div>
      </div>
  );
};

export default CheckoutProduct;
