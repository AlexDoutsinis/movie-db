import React, { Component } from "react";
import { Consumer } from "../AppContext";
import axios from "axios";

class Header extends Component {
  render() {
    const backdrop_path_size = "http://image.tmdb.org/t/p/w1280";

    return (
      <Consumer>
        {context => {
          const { heroMovie, getMovieGenres } = context;

          const movieGenres = getMovieGenres(heroMovie).map(genre => (
            <span key={genre.id}>{genre.name}</span>
          ));

          return (
            <header
              style={{
                backgroundImage:
                  heroMovie.backdrop_path &&
                  `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backdrop_path_size}${
                    heroMovie.backdrop_path
                  })`
              }}
            >
              <nav>
                <div className="nav-row">
                  <ul className="nav-bar">
                    <li>
                      <a href="#">MYMDB</a>
                    </li>
                    <li>
                      <a
                        href="https://www.themoviedb.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The movie db
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="header-content">
                <div className="row">
                  <h1>{heroMovie.title}</h1>
                  <p>{movieGenres}</p>
                  <p>{heroMovie.overview}</p>
                  <div className="release">
                    <p>Release Date</p>
                    <p>{heroMovie.release_date}</p>
                  </div>
                </div>
              </div>
            </header>
          );
        }}
      </Consumer>
    );
  }
}

export default Header;
