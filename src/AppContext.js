import React, { Component, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

export class AppProvider extends Component {
  state = {
    movies: [],
    moviesPage: 1,
    heroMovie: {
      // initialize genre_ids to prevent error in the first render
      genre_ids: []
    },
    genres: []
  };

  getGenres = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US`
    );

    const genres = await res.data.genres;

    return this.setState({ ...this.state, genres });
  };

  getMovies = async (page = 1) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    const moviesRes = await res.data;

    const { results: movies, page: moviesPage } = moviesRes;

    return this.setState({ ...this.state, movies, moviesPage });
  };

  getHeroMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );

    const heroMovie = await res.data.results;

    return this.setState({ ...this.state, heroMovie: heroMovie[0] });
  };

  async componentDidMount() {
    this.getGenres();
    this.getMovies();
    this.getHeroMovie();
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
          getMovieGenres: this.getMovieGenres,
          getMovies: this.getMovies,
          moviesPage: this.state.moviesPage
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const Consumer = AppContext.Consumer;
