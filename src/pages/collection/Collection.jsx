import "./Collection.scss";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CollectionItem from "../../components/collection-item/CollectionItem";

const Collection = () => {
  let params = useParams();
  const collection = useSelector(
    (state) => state.shop.SHOP_DATA[params.catagorey]
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
