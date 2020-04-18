import React from "react";

const ToggleMovie = ({ onToggleRandomMovie }) => (
  <button className="btn btn-warning btn-lg" onClick={onToggleRandomMovie}>
    Toggle Random Movie
  </button>
);
export default ToggleMovie;
