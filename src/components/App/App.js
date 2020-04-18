import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomMovie from "../RandomMovie";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import MovieService from "../../services/movie-service";
import TogglePlanet from "../TogglePlanet";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
export default class App extends Component {
  state = {
    showRandomMovie: true,
    hasError: false
  };
  swapiService = new MovieService();

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onToggleRandomMovie = () => {
    this.setState({ showRandomMovie: !this.state.showRandomMovie });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomMovie = this.state.showRandomMovie ? <RandomMovie /> : null;
    // const personDetails = (
    //   <ItemDetails
    //     itemId={11}
    //     getData={this.swapiService.getPerson}
    //     getImgUrl={this.swapiService.getPersonImage(11)}
    //   />
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={5}
    //     getData={this.swapiService.getStarship}
    //     getImgUrl={this.swapiService.getStarshipImage(5)}
    //   />
    // );
    return (
      <div className="app">
        <Header />
        {randomMovie}
        {/*<div className="buttonBlock">*/}
        {/*  <TogglePlanet onTogglePlanet={this.onToggleRandomPlanet} />*/}
        {/*  <ErrorButton />*/}
        {/*</div>*/}
        {/*<Row left={personDetails} right={starshipDetails} />*/}
      </div>
    );
  }
}
