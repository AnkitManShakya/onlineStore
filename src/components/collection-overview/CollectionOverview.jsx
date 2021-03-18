import "./CollectionOverview.scss";
import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/CollectionPreview";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.SHOP_DATA);

  return (
    <div className="collection-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

export default CollectionOverview;
