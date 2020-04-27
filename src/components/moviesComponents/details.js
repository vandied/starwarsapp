import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import MovieService from "../../services/movie-service";
import React from "react";

const movieService = new MovieService();
const { getMovie, getPerson, getTV, getImage } = movieService;

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getImage}>
      <Record field="popularity" label="Popularity" />
      <Record field="gender" label="Gender" />
      <Record field="birthday" label="Birthday" />
      <Record field="knownAs" label="Also known as" />
      <Record field="biography" label="biography" />
    </ItemDetails>
  );
};
const MovieDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getMovie} getImgUrl={getImage}>
      <Record field="popularity" label="Popularity" />
      <Record field="overview" label="Overview" />
      <Record field="homepage" label="Homepage" />
      <Record field="tagline" label="Tagline" />
    </ItemDetails>
  );
};
const TVDetails = ({ itemId }) => {
  return (
    <ItemDetails itemId={itemId} getData={getTV} getImgUrl={getImage}>
      <Record field="popularity" label="Popularity" />
      <Record field="overview" label="Overview" />
      <Record field="homepage" label="Homepage" />
      <Record field="tagline" label="Tagline" />
    </ItemDetails>
  );
};

export { PersonDetails, MovieDetails, TVDetails };
