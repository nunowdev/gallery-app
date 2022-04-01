import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Searchnav = () => {
  return (
    <header id="search__header">
      <nav id="search__nav">
        <div className="search__nav__container">
          <div className="search__nav__title">
            <h1 id="title">Gallery</h1>
          </div>
          <ul id="search__list">
            <li className="search__nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="search__nav__item" id="search">
              <a href="/">Search</a>
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                id="searchicon"
              />
            </li>
            <li
              className="search__nav__item"
              onClick={() =>
                window.alert("This feature has not been implemented.")
              }
            >
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Searchnav;
