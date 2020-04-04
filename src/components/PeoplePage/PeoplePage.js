import React, { Component } from "react";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import ErrorButton from "../ErrorButton/ErrorButton";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson: selectedPerson });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
          <ErrorButton />
        </div>
      </div>
    );
  }
}
