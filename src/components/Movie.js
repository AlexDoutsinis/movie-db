import React from "react";
import PropTypes from "prop-types";
import ellipsize from "ellipsize";
import { Consumer } from "../AppContext";

const Movie = ({ movie }) => {
  const poster_path_size = "http://image.tmdb.org/t/p/w300";
  const movieTitle = ellipsize(movie.title, 20);

  return (
    <Consumer>
      {context => {
        const { getMovieGenres } = context;

        const movieGenres = getMovieGenres(movie).map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ));

        const genres = movieGenres.filter((item, index) => index < 3);

        return (
          <div className="movie-box">
            <img
              src={`${poster_path_size}${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="quick-infos">
              <h3>{movieTitle}</h3>
              <p>{genres}</p>
              <i className="fas fa-heart" />
              <p>{movie.vote_average}</p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
