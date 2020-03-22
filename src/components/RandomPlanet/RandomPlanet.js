import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {}
  };

  onPlanetLoaded = planet => {
    this.setState({ planet });
  };

  updatePlanet() {
    // const id = Math.floor(Math.random() * 25) + 2;
    const id = 12;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded);
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  render() {
    const {
      planet: { id, name, population, rotationperiod, diameter }
    } = this.state;
    return (
      <div className="randomPlanet">
        {/*<div className='spinner'>*/}
        {/*<Spinner/>*/}
        {/*</div>*/}
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
