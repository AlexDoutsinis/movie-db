import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

class Movies extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    );
    const movies = await res.data.results;

    this.setState({ movies });
  }

  render() {
    console.log(this.state.movies);
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
            {this.state.movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </React.Fragment>
        </div>
      </section>
    );
  }
}

export default Movies;
