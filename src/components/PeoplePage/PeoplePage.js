import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import ErrorIndicator from "../ErrorIndicator";
import MovieService from "../../services/swapi-service";
import ErrorBoundary from "../ErrorBoundary";
import Row from "../Row";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 3,
    hasError: false
  };

  swapiService = new MovieService();

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    );

    const personDetails = <ItemDetails personId={this.state.selectedPerson} />;

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
