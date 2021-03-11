import "./CheckoutPage.scss";
import React from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/ducks/cart";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = selectCartTotal(cartItems);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
};

export default CheckoutPage;
