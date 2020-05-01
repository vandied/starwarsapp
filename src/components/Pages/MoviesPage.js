import React, { Component } from "react";
import Row from "../Row";
import { MovieDetails, MovieList } from "../moviesComponents";

export default class MoviesPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<MovieList onItemSelected={this.onItemSelected} />}
        right={<MovieDetails itemId={selectedItem} />}
      />
    );
  }
}
