import React, { Component, Fragment } from "react";
import axios from "axios";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import Slider from "react-slick";

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
    cast: [],
    loading: false
  };

  getMovie = async () => {
    const movieId = this.props.match.params.id;

    const res = await axios.get(
      `${api}/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const res2 = await axios.get(
      `${api}/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    );

    const [movie, credits] = await Promise.all([res, res2]);

    const {
      title,
      release_date,
      runtime,
      genres,
      vote_average,
      overview,
      poster_path,
      backdrop_path
    } = await movie.data;

    const { cast, crew } = await credits.data;

    const castList = cast.filter((item, index) => index < 12);

    const director = crew.filter(item => item.department === "Directing")[0]
      .name;

    setTimeout(() => {
      this.setState({
        ...this.state,
        title,
        release_date,
        runtime,
        genres,
        vote_average,
        overview,
        poster_path,
        backdrop_path,
        cast: castList,
        director,
        loading: false
      });
    }, 1000);
  };

  loading = () => this.setState({ ...this.state, loading: true });

  componentDidMount() {
    this.loading();
    this.getMovie();
    window.scrollTo(0, 0);
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
      <div key={item.id}>
        <img
          className="cast-img"
          src={
            item.profile_path
              ? `${profile_path_size}${item.profile_path}`
              : "https://via.placeholder.com/92x138"
          }
          alt={item.name}
        />
        <p className="cast-name">{item.name}</p>
      </div>
    ));

    const imgBackdropStyles = {
      backgroundImage: `url(${
        imgBackdrop ? imgBackdrop : "https://via.placeholder.com/772x433"
      })`
    };

    const length = moment.duration(runtime, "minutes").format("h [hr] m [min]");

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true
    };

    if (this.state.loading)
      return (
        <div className="full-screen-spinner">
          <i className="fas fa-circle-notch fa-spin" />
        </div>
      );

    return (
      <section className="movie-details">
        <div className="movie-side-box">
          <img
            className="poster-img"
            src={imgPoster ? imgPoster : "https://via.placeholder.com/185x278"}
            alt={`${title} poster`}
          />
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
          <div className="cast-box">
            <Slider {...settings}>{cast}</Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieDetails;
