import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

const api = "https://api.themoviedb.org/3/movie";
const poster_path_size = "http://image.tmdb.org/t/p/w185";
const backdrop_path_size = "http://image.tmdb.org/t/p/w1280";
const profile_path_size = "http://image.tmdb.org/t/p/w92";

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

    const castList = cast.filter((item, index) => index < 8);

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
      director,
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
      // <div key={item.id} className="cast-box">
      <div key={item.id} className="cast">
        <img src={`${profile_path_size}${item.profile_path}`} alt={item.name} />
        <p className="cast-name">{item.name}</p>
      </div>
      // </div>
    ));

    const imgBackdropStyles = { backgroundImage: `url(${imgBackdrop})` };

    const length = moment.duration(runtime, "minutes").format("h [hr] m [min]");

    return (
      <section className="movie-details">
        <div className="movie-side-box">
          <img className="poster-img" src={imgPoster} alt={`${title} poster`} />
          <div className="movie-infos">
            <div className="text">Release date</div>
            <p className="release-date">{release_date}</p>
            <div className="text">Length</div>
            <p className="length">{length}</p>
            <div className="text">Director</div>
            <p className="director">{director}</p>
          </div>
        </div>
        <div className="movie-main-box">
          <div className="img-backdrop" style={imgBackdropStyles} />
          <h2>{title}</h2>
          <p className="rating">Rating:</p>
          <p className="vote">{vote_average}</p>
          <div className="genres">Genres</div>
          <p className="genresList">{movieGenres}</p>
          <div className="overview-text">Overview</div>
          <p className="overview">{overview}</p>
          <p className="cast-text">Cast</p>
          <div className="cast-box">{cast}</div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;
