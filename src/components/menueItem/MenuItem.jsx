import "./MenuItem.scss";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ id, imageUrl, linkUrl, title, size }) => {
  let history = useHistory();
  let match = useRouteMatch();
  console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP</span>
      </div>
    </div>
  );
};

export default MenuItem;
