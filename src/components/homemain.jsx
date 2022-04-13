import React, { useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
AOS.init();

function Homemain() {
  const navigate = useNavigate();
  const homeInputRef = useRef();

  async function onSearch() {
    let homeData;
    let searchedWord = homeInputRef.current.value;
    console.log(searchedWord);
    console.log(typeof searchedWord);
    if (searchedWord.length !== 0) {
      homeData = await Axios.get(
        `https://api.unsplash.com/search/photos?query=${searchedWord}&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&per_page=30`
      );
      console.log(homeData);
      localStorage.setItem("homeData", JSON.stringify(homeData));
    } else {
      homeData = null;
      localStorage.setItem("homeData", null);
    }
  }

  return (
    <>
      <section id="main">
        <div className="main__container">
          <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            The internet’s source of
            <br />
            <span className="colored">freely-usable images</span>.
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200">
            Find the image you have been looking for with
            <span className="colored"> Gallery</span>.
          </h2>
          <div
            className="home__input__wrapper"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1200"
          >
            <input
              type="text"
              placeholder="Search Images"
              className="home__input"
              ref={homeInputRef}
              onInput={onSearch}
              // onKeyPress={(event) => event.key === "Enter" && onSearch()}
            />
            <button
              className="input__button"
              onClick={() =>
                setTimeout(() => {
                  navigate("/Search");
                }, 1000)
              }
            >
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                id="homesearchicon"
              />
            </button>
          </div>
          <div
            className="camera__image"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1200"
          ></div>
        </div>
      </section>
      <script src="app.js" defer></script>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
}

export default Homemain;
