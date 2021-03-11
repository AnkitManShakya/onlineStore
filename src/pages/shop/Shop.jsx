import React, { useState } from "react";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";
import SHOP_DATA from "./shop.data";

const Shop = () => {
  const collections = SHOP_DATA;
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collections.id} {...collection} />
      ))}
    </div>
  );
};

export default Shop;
