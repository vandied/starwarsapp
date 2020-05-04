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
import { MovieDetails, PersonDetails, TVDetails } from "../moviesComponents";

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
              <Route
                path="/"
                render={() => <h2>Welcome to Movie DB</h2>}
                exact
              />
              <Route path="/people/:id?" exact component={PeoplePage} />
              {/*<Route*/}
              {/*  path="/people/:id"*/}
              {/*  render={({ match }) => {*/}
              {/*    return <PersonDetails itemId={match.params.id} />;*/}
              {/*  }}*/}
              {/*/>*/}
              <Route path="/tv" exact component={TVPage} />
              <Route
                path="/tv/:id"
                render={({ match }) => {
                  return <TVDetails itemId={match.params.id} />;
                }}
              />
              <Route path="/movies" exact component={MoviesPage} />
              <Route
                path="/movies/:id"
                render={({ match }) => {
                  return <MovieDetails itemId={match.params.id} />;
                }}
              />
            </div>
          </Router>
        </MovieServiceProvider>
      </ErrorBoundary>
    );
  }
}
