import React from "react";
import { Consumer } from "../AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Consumer>
      {context => {
        return (
          <header className="black">
            <nav>
              <div className="row">
                <ul className="nav-bar">
                  <li>
                    <Link to="/">MYMDB</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
      }}
    </Consumer>
  );
};

export default Header;
