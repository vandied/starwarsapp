import React, { Component } from "react";
import "./ItemDetails.css";
import Spinner from "../Spinner";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label} </span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
    console.log(this.props);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImgUrl !== prevProps.getImgUrl
    ) {
      this.setState({ item: null, getImgUrl: null });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImgUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImgUrl(item.posterUrl) });
    });
  };

  render() {
    const { item, image } = this.state;
    if (!this.state.item) {
      return <Spinner />;
    }
    const { name, title } = item;
    return (
      <div className="item">
        <div className="itemImg">
          <img src={image} alt="characters" />
        </div>
        <div className="itemDetails">
          <h4>{name || title}</h4>
          <ul className="list-group">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
