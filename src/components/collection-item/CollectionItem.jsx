import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./CollectionItem.scss";
import { addCartItem } from "../../redux/ducks/cart";
import { useDispatch } from "react-redux";

const CollectionItem = (item) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        inverted
        onClick={() => {
          dispatch(addCartItem(item));
        }}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
