import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails/PersonDetails';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5,
  };
  onToggleRandomPlanet = () => {
    console.log(this.state);

    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };
  onPersonSelected = id => {
    this.setState({ selectedPerson: id });
  };
  render() {
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="app">
        <Header />
        {randomPlanet}
        <button className="togglePlanetBtn" onClick={this.onToggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
