export default class DummyMovieService {
  _imageBase = "http://image.tmdb.org/t/p/w500/";

  _people = [
    {
      id: 9827,
      name: "Rose Byrne [Test Data]",
      posterUrl: "/4oQWCLK7gd6RNKF0WJipJo7TyFP.jpg",
      popularity: 26.455,
      knownAs: "Super Girl",
      birthday: "1983-10-19",
      biography: "so strong",
      gender: "female"
    },
    {
      id: 208225,
      name: "Ashley Rickards [Test Data]",
      posterUrl: "/4oQWCLK7gd6RNKF0WJipJo7TyFP.jpg",
      popularity: 41.238,
      knownAs: "Super Boy",
      birthday: "1999-11-09",
      biography: "so strong",
      gender: "male"
    }
  ];

  _movies = [
    {
      id: 419704,
      title: "Ad Astra [Test Data]",
      posterUrl: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
      popularity: 333.47,
      overview:
        "The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown."
    },
    {
      id: 454626,
      title: "Sonic the Hedgehog [Test Data]",
      posterUrl: "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
      popularity: 169.746,
      overview:
        "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination."
    }
  ];

  _tv = [
    {
      id: 2834,
      name: "Law & Order: Special Victims Unit [Test Data]",
      posterUrl: "/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg",
      popularity: 153.33
    },
    {
      id: 2734,
      name: "My Girlfriend is an Alien [Test Data]",
      posterUrl: "/5e2owvs9TWVsuIacTFxJGPp6KVW.jpg",
      popularity: 116.425
    }
  ];

  getPopularMovies = async () => {
    return this._movies;
  };

  getMovie = async id => {
    return this._movies[0];
  };

  getPopularPeople = async () => {
    return this._people;
  };

  getPerson = async id => {
    return this._people[0];
  };

  getPopularTV = async () => {
    return this._tv;
  };

  getTV = async id => {
    return this._tv[0];
  };

  getImage = path => {
    return `${this._imageBase}${path}`;
  };
}
