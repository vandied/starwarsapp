import React, { Component } from "react";
import "./RandomPlanet.css";
import MovieService from "../../services/movie-service";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

export default class RandomPlanet extends Component {
  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 3500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  swapiService = new MovieService();

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
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className="randomPlanet_img">
        <img
          className="img"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
      </div>
      <div className="randomPlanet_description">
        <h2 className="name">{name}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Population <span>{population}</span>
          </li>
          <li className="list-group-item">
            Rotation Period <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            Diameter <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
