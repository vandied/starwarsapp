import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import React from "react";
import { withMovieService } from "../HOCHelpers";

const MovieDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="popularity" label="Popularity" />
      <Record field="overview" label="Overview" />
      <Record field="homepage" label="Homepage" />
      <Record field="tagline" label="Tagline" />
    </ItemDetails>
  );
};

const mapMethodsToProps = movieService => {
  return {
    getData: movieService.getMovie,
    getImgUrl: movieService.getImage
  };
};

export default withMovieService(MovieDetails, mapMethodsToProps);
