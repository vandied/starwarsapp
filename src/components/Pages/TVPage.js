import React from "react";
import { withRouter } from "react-router-dom";
import { TVList } from "../moviesComponents";

const TVPage = ({ history }) => {
  return <TVList onItemSelected={id => history.push(`${id}`)} />;
};

export default withRouter(TVPage);
