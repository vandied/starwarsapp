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
import PeoplePage from "../PeoplePage";
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
    console.log(this.state.showRandomMovie);
    this.setState({ showRandomMovie: !this.state.showRandomMovie });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomMovie = this.state.showRandomMovie ? <RandomMovie /> : null;
    const personDetails = (
      <ItemDetails
        itemId={2552}
        getData={this.movieService.getPerson}
        getImgUrl={this.movieService.getImage(
          "hjgSkUa3KjSYc8ZQhFRrqSF9cgX.jpg"
        )}
      />
    );
    const movieDetails = (
      <ItemDetails
        itemId={555}
        getData={this.movieService.getMovie}
        getImgUrl={this.movieService.getImage(
          "hjgSkUa3KjSYc8ZQhFRrqSF9cgX.jpg"
        )}
      />
    );
    return (
      <div className="app">
        <Header />
        {randomMovie}
        <div className="buttonBlock">
          <ToggleMovie onToggleRandomMovie={this.onToggleRandomMovie} />
          <ErrorButton />
        </div>
        <PeoplePage />
        <Row left={personDetails} right={movieDetails} />
      </div>
    );
  }
}
