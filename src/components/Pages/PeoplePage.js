import React from "react";
import { PersonDetails, PersonList } from "../moviesComponents";
import { withRouter } from "react-router-dom";
import Row from "../Row";

const PeoplePage = ({ history, match }) => {
  return (
    <Row
      right={<PersonDetails itemId={match.params.id} />}
      left={<PersonList onItemSelected={id => history.push(`${id}`)} />}
    />
  );
};

export default withRouter(PeoplePage);
