import ItemList from "../ItemList";
import { withData } from "../HOCHelpers";
import MovieService from "../../services/movie-service";

const movieService = new MovieService();
const { getPopularMovies, getPopularPeople, getPopularTV } = movieService;
const PersonList = withData(ItemList, getPopularPeople);
const MovieList = withData(ItemList, getPopularMovies);
const TVList = withData(ItemList, getPopularTV);

export { PersonList, MovieList, TVList };
