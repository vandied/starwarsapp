import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import RandomMovie from "../RandomMovie";
import ErrorIndicator from "../ErrorIndicator";
import { MovieServiceProvider } from "../MoviesServiceContext";
import ErrorBoundary from "../ErrorBoundary";
import MovieService from "../../services/movie-service";
import DummyMovieService from "../../services/dummyMovieService";
import {
  MoviesPage,
  PeoplePage,
  SecretPage,
  LoginPage,
  TVPage
} from "../Pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MovieDetails, TVDetails } from "../moviesComponents";

export default class App extends Component {
  state = {
    hasError: false,
    movieService: new MovieService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true });
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
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundary>
        <MovieServiceProvider value={this.state.movieService}>
          <Router>
            <div className="app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomMovie />
              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to Movie DB</h2>}
                  exact
                />
                <Route path="/people/:id?" exact component={PeoplePage} />
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
                <Route
                  path="/login"
                  render={() => {
                    return (
                      <LoginPage
                        isLoginIn={isLoggedIn}
                        onLogin={this.onLogin}
                      />
                    );
                  }}
                />
                <Route
                  path={"/secret"}
                  render={() => {
                    return <SecretPage isLoginIn={isLoggedIn} />;
                  }}
                />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </MovieServiceProvider>
      </ErrorBoundary>
    );
  }
}
