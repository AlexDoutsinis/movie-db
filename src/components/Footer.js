import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <ul>
          <li>
            <a href="/">MOVIE DB</a>
          </li>
          <li>
            <p>© Copyright all rights reserved 2018 — MOVIE DB</p>
          </li>
          <li>
            Powered by &nbsp;
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
    </footer>
  );
};

export default Footer;
