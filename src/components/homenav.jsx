import React from "react";
import { Link } from "react-router-dom";

const Homenav = () => {
  return (
    <header>
      <nav>
        <div className="nav__container">
          <div className="nav__title">
            <h1 id="title">Gallery</h1>
          </div>
          <ul>
            <li className="nav__item">
              <a>Home</a>
            </li>
            <li className="nav__item" id="search">
              <Link to="/Search">Search</Link>
            </li>
            <li
              className="nav__item"
              onClick={() =>
                window.alert("This feature has not been implemented.")
              }
            >
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Homenav;
