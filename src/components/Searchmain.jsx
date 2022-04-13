import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";

// S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU
//`https://api.unsplash.com/search/photos?query=dogs&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&per_page=30`

const Searchmain = () => {
  const searchRef = useRef();
  const [search, setSearch] = useState([]);

  const [photos] = useState([]);
  const homeData = JSON.parse(localStorage.getItem("homeData"));

  function homeSearch() {
    setSearch(homeData);
    if (search !== null) {
      for (let i = 0; i < 30; ++i) {
        photos.push(homeData.data.results[i]);
      }
    }
    //console.log(photos);
  }

  async function handleSearch() {
    setSearch([]);
    let requestedData = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${searchRef.current.value}&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&per_page=30`
    );
    setSearch(requestedData);
    console.log(search);
    if (search !== null) {
      for (let i = 0; i < 30; ++i) {
        photos.push(requestedData.data.results[i]);
        console.log(photos);
      }
    }
  }
  useEffect(() => {
    homeSearch();
  }, []);

  return (
    <main id="search__main">
      <div
        className="input__wrapper"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="image__search">
          <h1 className="search__title">Search Images</h1>
        </div>
        <input
          type="text"
          className="search__input"
          autoComplete="off"
          ref={searchRef}
          onChange={handleSearch}
          onKeyPress={(event) => event.key === "Enter" && handleSearch()}
        />
      </div>
      <div className="content__container" id="content__container">
        <h1 className="searched__title" id="searchtitle">
          Showing results for:
          <span className="colored">{` Searched Value`}</span>
        </h1>
        <div className="grid__container">
          <div className="grid" id="gridid">
            {photos.map((photo) => (
              <img
                src={photo.urls.regular || null}
                key={photo.id}
                className="grid__img"
                alt=""
              ></img>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Searchmain;
