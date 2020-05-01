import React from "react";
import { MovieServiceConsumer } from "../MoviesServiceContext";

const withMovieService = (Wrapped, mapMethodsToProps) => {
  return props => {
    return (
      <MovieServiceConsumer>
        {movieService => {
          const serviceProps = mapMethodsToProps(movieService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </MovieServiceConsumer>
    );
  };
};

export default withMovieService;
