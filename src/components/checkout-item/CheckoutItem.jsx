import "./CheckoutItem.scss";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addCartItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/ducks/cart";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  let dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </span>
        <span className="value">{quantity} </span>
        <span className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
