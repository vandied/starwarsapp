import ItemList from "../ItemList";
import { withData } from "../HOCHelpers";
import MovieService from "../../services/movie-service";
import React from "react";
const movieService = new MovieService();
const { getPopularMovies, getPopularPeople, getPopularTV } = movieService;

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

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getPopularPeople
);
const MovieList = withData(
  withChildFunction(ItemList, renderMovieTitle),
  getPopularMovies
);
const TVList = withData(withChildFunction(ItemList, renderName), getPopularTV);

export { PersonList, MovieList, TVList };
