import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Movie searching</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/movies/">Movies</Link>
        </li>
        <li>
          <Link to="/tv/">TV</Link>
        </li>
        <li>
          <Link to="/people/">People</Link>
        </li>
      </ul>
      <button className="btn btn-primary btn-small" onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
};
export default Header;
