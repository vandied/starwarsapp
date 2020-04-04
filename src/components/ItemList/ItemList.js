import React, { Component } from "react";
import "./ItemList.css";
import Spinner from "../Spinner/Spinner";

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({ itemList });
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
    const { itemList } = this.state;
    if (!itemList) return <Spinner />;
    const items = this.renderPerson(itemList);
    return (
      <div className="itemList">
        <ul className="listGroup">{items}</ul>
      </div>
    );
  }
}
