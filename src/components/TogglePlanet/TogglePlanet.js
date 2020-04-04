import React from "react";

const TogglePlanet = ({ onToggleRandomPlanet }) => (
  <button className="btn btn-warning btn-lg" onClick={onToggleRandomPlanet}>
    Toggle Random Planet
  </button>
);
export default TogglePlanet;
