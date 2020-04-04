import React, { Component } from "react";
import "./RandomPlanet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class RandomPlanet extends Component {
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 22500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false, error: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const loader =
      loading && !error ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    return (
      <div className="randomPlanet">
        {loader}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationperiod, diameter } = planet;

  return (
    <React.Fragment>
      <div className="planetImg">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
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
    </React.Fragment>
  );
};
