import React from "react";
import "./Header.css";

const Header = ({ onServiceChange }) => {
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
      <button className="btn btn-primary btn-small" onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};
export default Header;
