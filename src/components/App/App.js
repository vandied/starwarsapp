import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomMovie from "../RandomMovie";
import ErrorButton from "../ErrorButton";
import ErrorIndicator from "../ErrorIndicator";
import ToggleMovie from "../ToggleMovie";
import {
  PersonDetails,
  MovieDetails,
  TVDetails,
  PersonList,
  MovieList,
  TVList
} from "../moviesComponents";
import { MovieServiceProvider } from "../MoviesServiceContext";
import ErrorBoundary from "../ErrorBoundary";
import MovieService from "../../services/movie-service";
import DummyMovieService from "../../services/dummyMovieService";

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
            <div className="buttonBlock">
              <ToggleMovie onToggleRandomMovie={this.onToggleRandomMovie} />
              {/*<ErrorButton />*/}
            </div>
            <PersonDetails itemId={933238} />
            <MovieDetails itemId={338762} />
            <TVDetails itemId={63333} />
            <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
            <MovieList>{({ title }) => <span>{title}</span>}</MovieList>
            <TVList>{({ name }) => <span>{name}</span>}</TVList>
          </div>
        </MovieServiceProvider>
      </ErrorBoundary>
    );
  }
}
