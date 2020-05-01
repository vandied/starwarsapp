import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomMovie from "../RandomMovie";
import ErrorIndicator from "../ErrorIndicator";
import { MovieServiceProvider } from "../MoviesServiceContext";
import ErrorBoundary from "../ErrorBoundary";
import MovieService from "../../services/movie-service";
import DummyMovieService from "../../services/dummyMovieService";
import { MoviesPage, TVPage, PeoplePage } from "../Pages";
export default class App extends Component {
  state = {
    showRandomMovie: true,
    hasError: false,
    movieService: new MovieService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onToggleRandomMovie = () => {
    this.setState({ showRandomMovie: !this.state.showRandomMovie });
  };

  onServiceChange = () => {
    this.setState(({ movieService }) => {
      const Service =
        movieService instanceof MovieService ? DummyMovieService : MovieService;
      return {
        movieService: new Service()
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const randomMovie = this.state.showRandomMovie ? <RandomMovie /> : null;
    return (
      <ErrorBoundary>
        <MovieServiceProvider value={this.state.movieService}>
          <div className="app">
            <Header onServiceChange={this.onServiceChange} />
            {randomMovie}
            <MoviesPage />
            <TVPage />
            <PeoplePage />
          </div>
        </MovieServiceProvider>
      </ErrorBoundary>
    );
  }
}
