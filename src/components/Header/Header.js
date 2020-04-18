import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">Movie searching</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Movies</a>
        </li>
        <li>
          <a href="#">TV</a>
        </li>
        <li>
          <a href="#">People</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
