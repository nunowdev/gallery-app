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
              <a>Search</a>
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                id="searchicon"
              />
            </li>
            <li
              className="search__nav__item"
              onclick='window.alert("This feature has not been implemented.")'
            >
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="input__wrapper"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="image__search">
          <h1 className="search__title">Search for images</h1>
        </div>
        <input
          type="text"
          placeholder="Maybe a city landscape? :D"
          className="search__input"
        />
      </div>
    </header>
  );
};

export default Searchnav;
