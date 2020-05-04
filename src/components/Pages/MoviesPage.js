import React from "react";
import { MovieList } from "../moviesComponents";
import { withRouter } from "react-router-dom";

const MoviesPage = ({ history }) => {
  return <MovieList onItemSelected={id => history.push(`${id}`)} />;
};

export default withRouter(MoviesPage);
