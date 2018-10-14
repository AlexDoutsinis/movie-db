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

                <button
                  style={{
                    height: "100px",
                    width: "200px",
                    backgroundColor: "red",
                    marginTop: "50px"
                  }}
                  onClick={() => getNextMoviesPage(moviesPage + 1)}
                >
                  Load more
                </button>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Movies;
