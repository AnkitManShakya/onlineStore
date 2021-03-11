import "./Directory.scss";
import React from "react";
import sections from "./directoryData";
import MenuItem from "../menueItem/MenuItem";

const Directory = () => {
  const data = sections;
  return (
    <div className="directory-menu">
      {data.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;
