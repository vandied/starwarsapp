import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import SwapiService from "../../services/swapi-service";
import TogglePlanet from "../TogglePlanet";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
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
    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={this.swapiService.getPerson}
        getImgUrl={this.swapiService.getPersonImage(11)}
      />
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={this.swapiService.getStarship}
        getImgUrl={this.swapiService.getStarshipImage(5)}
      />
    );
    return (
      <div className="app">
        <Header />
        {randomPlanet}
        <div className="buttonBlock">
          <TogglePlanet onTogglePlanet={this.onToggleRandomPlanet} />
          <ErrorButton />
        </div>
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
