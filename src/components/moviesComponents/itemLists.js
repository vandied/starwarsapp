import ItemList from "../ItemList";
import { withData } from "../HOCHelpers";
import React from "react";
import { withMovieService } from "../HOCHelpers";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;

const renderMovieTitle = ({ title, popularity }) => (
  <span>
    {title} ({popularity})
  </span>
);

const mapPeopleMethodsToProps = movieService => {
  return {
    getData: movieService.getPopularPeople
  };
};

const mapTVMethodsToProps = movieService => {
  return {
    getData: movieService.getPopularTV
  };
};

const mapMoviesMethodsToProps = movieService => {
  return {
    getData: movieService.getPopularMovies
  };
};

const PersonList = withMovieService(
  withData(withChildFunction(ItemList, renderName)),
  mapPeopleMethodsToProps
);

const MovieList = withMovieService(
  withData(withChildFunction(ItemList, renderMovieTitle)),
  mapMoviesMethodsToProps
);

const TVList = withMovieService(
  withData(withChildFunction(ItemList, renderName)),
  mapTVMethodsToProps
);

export { PersonList, MovieList, TVList };
