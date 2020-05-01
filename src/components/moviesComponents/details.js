import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import React from "react";
import { MovieServiceConsumer } from "../MoviesServiceContext";

const PersonDetails = ({ itemId }) => {
  return (
    <MovieServiceConsumer>
      {({ getPerson, getImage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getPerson} getImgUrl={getImage}>
            <Record field="popularity" label="Popularity" />
            <Record field="gender" label="Gender" />
            <Record field="birthday" label="Birthday" />
            <Record field="knownAs" label="Also known as" />
            <Record field="biography" label="biography" />
          </ItemDetails>
        );
      }}
    </MovieServiceConsumer>
  );
};
const MovieDetails = ({ itemId }) => {
  return (
    <MovieServiceConsumer>
      {({ getMovie, getImage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getMovie} getImgUrl={getImage}>
            <Record field="popularity" label="Popularity" />
            <Record field="overview" label="Overview" />
            <Record field="homepage" label="Homepage" />
            <Record field="tagline" label="Tagline" />
          </ItemDetails>
        );
      }}
    </MovieServiceConsumer>
  );
};
const TVDetails = ({ itemId }) => {
  return (
    <MovieServiceConsumer>
      {({ getTV, getImage }) => {
        return (
          <ItemDetails itemId={itemId} getData={getTV} getImgUrl={getImage}>
            <Record field="popularity" label="Popularity" />
            <Record field="overview" label="Overview" />
            <Record field="homepage" label="Homepage" />
            <Record field="tagline" label="Tagline" />
          </ItemDetails>
        );
      }}
    </MovieServiceConsumer>
  );
};

export { PersonDetails, MovieDetails, TVDetails };