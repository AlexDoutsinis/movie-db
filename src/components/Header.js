import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <div className="row">
        <ul className="nav-bar">
          <li>
            <Link className="link" to="/">
              Movie DB
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
