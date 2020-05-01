import React, { Component } from "react";
import Row from "../Row";
import { TVList, TVDetails } from "../moviesComponents";

export default class TVPage extends Component {
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
        left={<TVList onItemSelected={this.onItemSelected} />}
        right={<TVDetails itemId={selectedItem} />}
      />
    );
  }
}
