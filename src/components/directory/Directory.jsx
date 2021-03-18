import "./Directory.scss";
import React from "react";
import MenuItem from "../menueItem/MenuItem";
import { useSelector } from "react-redux";

const Directory = () => {
  const data = useSelector((state) => state.directory.sections);
  return (
    <div className="directory-menu">
      {data.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Directory;
