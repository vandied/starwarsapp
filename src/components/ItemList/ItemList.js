import React, { Component } from "react";
import "./ItemList.css";
import MovieService from "../../services/movie-service";
import withData from "../HOCHelpers/withData";

const ItemList = props => {
  const { data, onItemSelected, children } = props;
  const items = data.map(item => {
    const { id } = item;
    const label = children(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });
  return (
    <div className="itemList">
      <ul className="list-group">{items}</ul>
    </div>
  );
};

const { getPopularPeople } = new MovieService();

export default withData(ItemList, getPopularPeople);
