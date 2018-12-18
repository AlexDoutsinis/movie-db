import React from "react";
import { Consumer } from "../containers/AppContext";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const backdrop_path_size = "http://image.tmdb.org/t/p/w1280";

const Hero = () => (
  <Consumer>
    {context => {
      const { heroMovies, getMovieGenres } = context;

      if (heroMovies.length < 1) return <Loader />;

      const heroCarousel =
        heroMovies.length > 0 &&
        heroMovies.map(movie => {
          const movieGenres = getMovieGenres(movie).map((genre, index) => {
            if (index < 2) return <span key={genre.id}>{genre.name}</span>;
            return null;
          });

          const bgImageStyles = {
            backgroundImage:
              movie.backdrop_path &&
              `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backdrop_path_size}${
                movie.backdrop_path
              })`,
            textDecoration: "none"
          };

          return (
            <Link
              key={movie.id}
              className="hero"
              style={bgImageStyles}
              to={`/movie/details/${movie.id}`}
            >
              <div className="hero-box">
                <div className="hero-content">
                  <div className="row">
                    <h3 className="popular-text">Popular</h3>
                    <h1>{movie.title}</h1>
                    <p className="genres">{movieGenres}</p>
                    <p className="rating-text">{movie.vote_average} Rating</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        });

      const params = {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
          clickable: true
        },
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        }
      };

      return (
        <section>
          {heroMovies.length > 0 && <Swiper {...params}>{heroCarousel}</Swiper>}
        </section>
      );
    }}
  </Consumer>
);

export default Hero;
