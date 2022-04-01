import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
AOS.init();

const Homemain = () => {
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
            />
            <button className="input__button">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                id="homesearchicon"
              />
            </button>
          </div>
        </div>
        <div
          className="camera__image"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1200"
        ></div>
      </section>
      <script src="app.js" defer></script>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default Homemain;
