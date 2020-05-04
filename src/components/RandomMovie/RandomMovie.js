import React, { Component } from "react";
import "./RandomMovie.css";
import MovieService from "../../services/movie-service";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import PropTypes from "prop-types";

export default class RandomMovie extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateMovie();
    this.interval = setInterval(this.updateMovie, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  movieService = new MovieService();

  state = {
    movie: {},
    loading: true,
    error: false
  };

  onMovieLoaded = movie => {
    this.setState({ movie, loading: false, error: false });
  };

  updateMovie = () => {
    const id = Math.floor(Math.random() * 5000) + 200;
    this.movieService
      .getMovie(id)
      .then(this.onMovieLoaded)
      .catch(this.onError);
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  render() {
    const { movie, loading, error } = this.state;
    const hasData = !(loading || error);
    const loader =
      loading && !error ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : null;
    const content = hasData ? <MovieView movie={movie} /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    return (
      <div className="randomMovie">
        {loader}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const MovieView = ({ movie }) => {
  const { poster, title, popularity, overview, homepage } = movie;

  return (
    <React.Fragment>
      <div className="randomMovie_img">
        <img
          className="img"
          src={`http://image.tmdb.org/t/p/w500/${poster}`}
          alt="film"
        />
      </div>
      <div className="randomMovie_description">
        <h2 className="name">{title}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Rating <span>{popularity}</span>
          </li>
          <li className="list-group-item">
            Overview <span>{overview}</span>
          </li>
          <li className="list-group-item">
            Homepage <span>{homepage}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
