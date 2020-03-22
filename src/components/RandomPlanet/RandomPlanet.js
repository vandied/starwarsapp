import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/swapi-service";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };
  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(planet =>
      this.setState({
        id,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    );
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    const { id, name, population, rotationperiod, diameter } = this.state;
    return (
      <div className="randomPlanet">
        <div className="planetImg">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            alt="planetImg"
          />
        </div>
        <div className="planetDescription">
          <h2 className="planetName">{name}</h2>
          <div className="list-group">
            <div>
              Population <span>{population}</span>
            </div>
            <div>
              Rotation Period <span>{rotationperiod}</span>
            </div>
            <div>
              Diameter <span>{diameter}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
