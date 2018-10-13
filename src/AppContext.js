import React, { Component, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

export class AppProvider extends Component {
  state = {
    movies: [],
    heroMovie: {
      genre_ids: []
    },
    genres: []
  };

  async componentDidMount() {
    const genresRes = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    );

    const genres = await genresRes.data.genres;

    const moviesRes = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await moviesRes.data.results;

    this.setState({ ...this.state, movies, heroMovie: movies[0], genres });
  }

  getMovieGenres = movie =>
    [].concat.apply(
      [],
      movie.genre_ids.map(id =>
        this.state.genres.filter(genre => genre.id === id && genre.name)
      )
    );

  render() {
    return (
      <AppContext.Provider
        value={{
          heroMovie: this.state.heroMovie,
          movies: this.state.movies,
          getMovieGenres: this.getMovieGenres
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
