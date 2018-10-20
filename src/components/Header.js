import React from "react";
import { Consumer } from "../AppContext";

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
                    <a href="#">MYMDB</a>
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
