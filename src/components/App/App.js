import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomMovie from "../RandomMovie";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import MovieService from "../../services/movie-service";
import ToggleMovie from "../ToggleMovie";
import ItemDetails from "../ItemDetails";
import Row from "../Row";
import { Record } from "../ItemDetails/ItemDetails";
export default class App extends Component {
  state = {
    showRandomMovie: true,
    hasError: false
  };
  movieService = new MovieService();

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
    const { getPerson, getMovie, getImage } = this.movieService;
    const personDetails = (
      <ItemDetails itemId={1910848} getData={getPerson} getImgUrl={getImage}>
        <Record field="popularity" label="Popularity" />
        <Record field="gender" label="Gender" />
        <Record field="birthday" label="Birthday" />
        <Record field="knownAs" label="Also known as" />
        <Record field="biography" label="biography" />
      </ItemDetails>
    );
    const movieDetails = (
      <ItemDetails itemId={2610} getData={getMovie} getImgUrl={getImage}>
        <Record field="popularity" label="Popularity" />
        <Record field="overview" label="Overview" />
        <Record field="homepage" label="Homepage" />
        <Record field="tagline" label="Tagline" />
      </ItemDetails>
    );
    return (
      <div className="app">
        <Header />
        {randomMovie}
        <div className="buttonBlock">
          <ToggleMovie onToggleRandomMovie={this.onToggleRandomMovie} />
          <ErrorButton />
        </div>
        <Row left={personDetails} right={movieDetails} />
      </div>
    );
  }
}
