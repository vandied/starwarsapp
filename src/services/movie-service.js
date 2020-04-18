export default class MovieService {
  _apiBase = "https://api.themoviedb.org/3/";
  _imageBase = "http://image.tmdb.org/t/p/w500/";

  getResource = async url => {
    const res = await fetch(
      `${this._apiBase}${url}api_key=fb1052fd5ba33a6831443d694b9c759e`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getPopularMovies = async () => {
    const res = await this.getResource("movie/popular?page=1&");
    return await res.results.map(this._transformMovie);
  };

  getMovie = async id => {
    const movie = await this.getResource(`movie/${id}?`);
    return this._transformMovie(movie);
  };

  getPopularPeople = async () => {
    const res = await this.getResource("person/popular?page=1&");
    return await res.results.map(this._transformPeople);
  };

  getPerson = async id => {
    const person = await this.getResource(`person/${id}?`);
    return this._transformPeople(person);
  };

  getPopularTV = async () => {
    const res = await this.getResource("tv/popular?page=1&");
    return await res.results.map(this._transformTV);
  };

  getTV = async id => {
    const tv = await this.getResource(`tv/${id}?`);
    return this._transformTV(tv);
  };

  _transformMovie = movie => {
    return {
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      popularity: movie.popularity,
      overview: movie.overview,
      homepage: movie.homepage
    };
  };
  _transformPeople = person => {
    return {
      id: person.id,
      name: person.name,
      posterUrl: person.poster_path,
      popularity: person.popularity
    };
  };

  _transformTV = person => {
    return {
      id: person.id,
      name: person.name,
      posterUrl: person.poster_path,
      popularity: person.popularity
    };
  };

  getImage = path => {
    return `${this._imageBase}${path}`;
  };
}
