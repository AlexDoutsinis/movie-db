import React, { Component, Fragment } from "react";
import axios from "axios";

const api = "https://api.themoviedb.org/3/movie";
const poster_path_size = "http://image.tmdb.org/t/p/w154";
const backdrop_path_size = "http://image.tmdb.org/t/p/w1280";
const profile_path_size = "http://image.tmdb.org/t/p/w45";

class MovieDetails extends Component {
  state = {
    title: "",
    release_date: "",
    runtime: "",
    genres: [],
    vote_average: "",
    overview: "",
    poster_path: "",
    backdrop_path: "",
    director: "",
    cast: []
  };

  getMovie = async () => {
    const movieId = this.props.match.params.id;

    const res = await axios.get(
      `${api}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const {
      title,
      release_date,
      runtime,
      genres,
      vote_average,
      overview,
      poster_path,
      backdrop_path
    } = await res.data;

    console.log(res.data);

    this.setState({
      ...this.state,
      title,
      release_date,
      runtime,
      genres,
      vote_average,
      overview,
      poster_path,
      backdrop_path
    });
  };

  getCredits = async () => {
    const movieId = this.props.match.params.id;

    const res = await axios.get(
      `${api}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const { cast, crew } = await res.data;

    const castList = cast.filter((item, index) => index < 6);

    const director = crew.filter(item => item.department === "Directing")[0]
      .name;

    this.setState({ ...this.state, cast: castList, director });
  };

  componentDidMount() {
    this.getMovie();
    this.getCredits();
  }

  render() {
    const {
      title,
      release_date,
      runtime,
      genres,
      vote_average,
      overview,
      poster_path,
      backdrop_path
    } = this.state;

    const movieGenres = genres.map(genre => (
      <span key={genre.id}>{genre.name}</span>
    ));
    const imgPoster = poster_path && `${poster_path_size}${poster_path}`;
    const imgBackdrop =
      backdrop_path && `${backdrop_path_size}${backdrop_path}`;

    const cast = this.state.cast.map(item => (
      <div className="cast" key={item.id}>
        <img src={`${profile_path_size}${item.profile_path}`} alt={item.name} />
        <p>{item.name}</p>
      </div>
    ));

    return (
      <section className="movie-details">
        <div className="movie-side-box">
          <div className="poster-img">
            <img src={imgPoster} alt={`${title} poster`} />
          </div>
          <div className="movie-infos">
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{runtime}</p>
            <p>director</p>
          </div>
        </div>
        <div className="movie-main-box">
          <div className="backdrop-image">
            <img src={imgBackdrop} alt={`${title} backdrop`} />
          </div>
          <p>{vote_average}</p>
          <p>{movieGenres}</p>
          <p>{overview}</p>
          {cast}
        </div>
      </section>
    );
  }
}

export default MovieDetails;
