import React from "react";
import PropTypes from "prop-types";
import ellipsize from "ellipsize";

const Movie = ({ movie }) => {
  const poster_path_size = "http://image.tmdb.org/t/p/w300";
  const movieTitle = ellipsize(movie.title, 20);

  return (
    <div className="movie-box">
      <img src={`${poster_path_size}${movie.poster_path}`} alt={movie.title} />
      <div>
        <h3>{movieTitle}</h3>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
