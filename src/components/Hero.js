import React, { Component } from "react";
import { Consumer } from "../AppContext";

class Hero extends Component {
  render() {
    const backdrop_path_size = "http://image.tmdb.org/t/p/w1280";

    return (
      <Consumer>
        {context => {
          const { heroMovie, getMovieGenres } = context;

          const movieGenres = getMovieGenres(heroMovie).map((genre, index) => {
            if (index < 2) return <span key={genre.id}>{genre.name}</span>;
            return null;
          });

          const bgImageStyles = {
            backgroundImage:
              heroMovie.backdrop_path &&
              `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backdrop_path_size}${
                heroMovie.backdrop_path
              })`
          };

          return (
            <section className="hero" style={bgImageStyles}>
              <div className="hero-content">
                <div className="row">
                  <h3 className="popular-text">Popular</h3>
                  <h1>{heroMovie.title}</h1>
                  <p className="genres">{movieGenres}</p>
                  <p className="rating-text">{heroMovie.vote_average} Rating</p>
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default Hero;
