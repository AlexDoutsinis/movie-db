import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
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
            <h1>The martian</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima in
              facere obcaecati sint sequi accusamus sed reiciendis maiores eum
              hic?
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
