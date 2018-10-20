import React, { Component, Fragment } from "react";
import { Consumer } from "../AppContext";

class MovieDetails extends Component {
  render() {
    return (
      <Consumer>
        {context => {
          return (
            <section className="movie-details">
              <div className="movie-side-box">
                <div className="poster-img">poster_path image</div>
                <div className="movie-infos">
                  <h2>title</h2>
                  <p>release date</p>
                  <p>length</p>
                  <p>director</p>
                </div>
              </div>
              <div className="movie-main-box">
                <div className="backdrop-image">backdrop_path</div>
                <p>rating</p>
                <p>genres</p>
                <p>overview</p>
                <div className="cast">cast</div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default MovieDetails;
