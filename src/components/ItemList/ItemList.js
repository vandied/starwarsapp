import React, { Component } from 'react';
import './ItemList.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };
  componentDidMount() {
    this.swapiService.getAllPeople().then(peopleList => {
      this.setState({ peopleList });
    });
  }
  renderPerson(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="listGroupItem"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Spinner />;
    const items = this.renderPerson(peopleList);
    return (
      <div className="itemList">
        <ul className="listGroup">{items}</ul>
      </div>
    );
  }
}
