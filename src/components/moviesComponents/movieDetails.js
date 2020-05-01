import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import React from "react";
import { MovieServiceConsumer } from "../MoviesServiceContext";

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

export { MovieDetails };
