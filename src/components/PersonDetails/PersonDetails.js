import React, { Component } from 'react';
import './PersonDetails.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner/Spinner';

export default class PersonDetails extends Component {
  state = {
    person: null,
  };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ person: null });
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({ person });
    });
  };
  render() {
    if (!this.state.person) {
      return <Spinner />;
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className="person">
        <div className="personImg">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="characters"
          />
        </div>
        <div className="personDetails">
          <h4>
            {name} {this.props.personId}
          </h4>
          <ul className="detailsList">
            <li className="detailsListItem">
              Gender <span>{gender}</span>
            </li>
            <li className="detailsListItem">
              Birth <span>{birthYear}</span>
            </li>
            <li className="detailsListItem">
              Eye Color <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
