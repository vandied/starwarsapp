import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import React from "react";
import { withMovieService } from "../HOCHelpers";

const PersonDetails = ({ itemId, movieService }) => {
  const { getPerson, getImage } = movieService;
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

export default withMovieService(PersonDetails);
