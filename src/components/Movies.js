import React from "react";

export default () => {
  return (
    <div>
      <section className="movies">
        <div className="row">
          <div className="search-box">
            <form>
              <i className="fas fa-search" />
              <input type="text" placeholder="Search for a movie" />
            </form>
          </div>

          <div className="movie-box">
            <img
              src="https://images.g2a.com/newlayout/470x470/1x1x0/a1ff8497a614/5aa2afbbae653ab7bd797806"
              alt=""
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>

          <div className="movie-box">
            <img
              src="https://images.g2a.com/newlayout/470x470/1x1x0/a1ff8497a614/5aa2afbbae653ab7bd797806"
              alt=""
            />
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
        </div>
      </section>
    </div>
  );
};
