import React from "react";
import { MovieList } from "../moviesComponents";
import { withRouter } from "react-router-dom";

const MoviesPage = ({ history }) => {
  return (
    <MovieList
      onItemSelected={itemId => {
        history.push(`/movies/${itemId}`);
      }}
    />
  );
};

export default withRouter(MoviesPage);
