import React from "react";
import "./ItemList.css";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
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

export default ItemList;
