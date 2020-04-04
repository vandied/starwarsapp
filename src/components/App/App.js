import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import SwapiService from "../../services/swapi-service";
import TogglePlanet from "../TogglePlanet";
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
        <div className="buttonBlock">
          <TogglePlanet onTogglePlanet={this.onToggleRandomPlanet} />
          <ErrorButton />
        </div>
        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            >
              {i => i.name}
            </ItemList>
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            >
              {i => i.name}
            </ItemList>
          </div>
        </div>
      </div>
    );
  }
}
