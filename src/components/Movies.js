import React from "react";
import Movie from "./Movie";
import { Consumer } from "../AppContext";

const Movies = () => (
  <Consumer>
    {context => {
      const {
        movies,
        getNextMoviesPage,
        moviesPage,
        notMoviesLoaded,
        moviesLoaded
      } = context;

      const onClick = () => {
        notMoviesLoaded();
        getNextMoviesPage(moviesPage + 1);
      };

      return (
        <section className="movies">
          <div className="row">
            <React.Fragment>
              {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
            </React.Fragment>

            {moviesLoaded ? (
              <div className="btn-box">
                <button onClick={onClick}>Load more</button>
              </div>
            ) : (
              <div className="btn-box">
                <button>
                  Load more
                  <i className="fas fa-circle-notch fa-spin" />
                </button>
              </div>
            )}
          </div>
        </section>
      );
    }}
  </Consumer>
);

export default Movies;
