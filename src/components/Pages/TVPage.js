import React from "react";
import { withRouter } from "react-router-dom";
import { TVList } from "../moviesComponents";

const TVPage = ({ history }) => {
  return (
    <TVList
      onItemSelected={itemId => {
        history.push(`/tv/${itemId}`);
      }}
    />
  );
};

export default withRouter(TVPage);
