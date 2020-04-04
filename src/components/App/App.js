import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";
import ItemList from "../ItemList/ItemList";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };
  swapiService = new SwapiService();

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onToggleRandomPlanet = () => {
    console.log(this.state);

    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="app">
        <Header />
        {randomPlanet}
        <button className="togglePlanetBtn" onClick={this.onToggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={item => item.name}
            />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={item => item.name}
            />
          </div>
        </div>
      </div>
    );
  }
}
