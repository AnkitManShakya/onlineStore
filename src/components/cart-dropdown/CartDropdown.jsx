import "./CartDropdown.scss";
import React from "react";
import CustomButton from "../customButton/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/CartItem";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/ducks/cart";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  let dispatch = useDispatch();
  let history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        Go to
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
