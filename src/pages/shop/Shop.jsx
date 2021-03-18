import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/CollectionOverview";
import Collection from "../collection/Collection";

const Shop = () => {
  let match = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:catagorey`} component={Collection} />
    </div>
  );
};

export default Shop;
