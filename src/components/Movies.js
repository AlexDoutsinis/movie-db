import React, { Component } from "react";
import Movie from "./Movie";
import { Consumer } from "../AppContext";

class Movies extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          const { movies, getNextMoviesPage, moviesPage } = context;
          return (
            <section className="movies">
              <div className="row">
                <div className="search-box">
                  <form>
                    <i className="fas fa-search" />
                    <input type="text" placeholder="Search for a movie" />
                  </form>
                </div>

                <React.Fragment>
                  {movies.map(movie => (
                    <Movie key={movie.id} movie={movie} />
                  ))}
                </React.Fragment>

                <div className="btn-box">
                  <button onClick={() => getNextMoviesPage(moviesPage + 1)}>
                    Load more
                  </button>
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
