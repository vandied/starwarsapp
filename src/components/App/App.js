import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PeoplePage from "../PeoplePage/PeoplePage";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

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
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
