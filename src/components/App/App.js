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
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    hasError: false,
    movieService: new MovieService()
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

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

    return (
      <ErrorBoundary>
        <MovieServiceProvider value={this.state.movieService}>
          <Router>
            <div className="app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomMovie />
              <Route path={"/people"} component={PeoplePage} />
              <Route path={"/tv"} component={TVPage} />
              <Route path={"/movies"} component={MoviesPage} />
            </div>
          </Router>
        </MovieServiceProvider>
      </ErrorBoundary>
    );
  }
}
