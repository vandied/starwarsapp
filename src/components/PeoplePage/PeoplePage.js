import React, { Component } from "react";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import ErrorIndicator from "../ErrorIndicator";
import MovieService from "../../services/movie-service";
import ErrorBoundary from "../ErrorBoundary";
import Row from "../Row";
import { Record } from "../ItemDetails/ItemDetails";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 1910848,
    hasError: false
  };

  movieService = new MovieService();

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
        getData={this.movieService.getPopularPeople}
      >
        {i => `${i.name}`}
      </ItemList>
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.selectedPerson}
        getData={this.movieService.getPerson}
        getImgUrl={this.movieService.getImage}
      >
        <Record field="popularity" label="Popularity" />
        <Record field="gender" label="Gender" />
        <Record field="birthday" label="Birthday" />
        <Record field="knownAs" label="Also known as" />
        <Record field="biography" label="biography" />
      </ItemDetails>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
