import React, { useState } from "react";
import Axios from "axios";

const Searchmain = () => {
  const [photosArr, setPhotosArr] = useState([]);
  const arrayTest = [];
  const [searchedWord, setSearchedWord] = useState("");
  const searchInput = document.getElementById("searchInput");

  async function getPhotos() {
    const requestedData = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&`
    );
    setSearchedWord(searchInput.value);
    for (let i = 0; i < 10; ++i) {
      arrayTest.push(requestedData.data.results[i].urls.regular);
    }
    setPhotosArr(arrayTest);
    console.log(photosArr);
    console.log(arrayTest);
    //////////////////////////////////////////////////////////////////////
  }

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
          placeholder="Maybe a city landscape? :D"
          className="search__input"
          id="searchInput"
          onInput={getPhotos}
        />
        <div
          id="nosearchimage"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1200"
        ></div>
      </div>
      <h1 className="searched__title" id="searchtitle">{`${searchedWord}`}</h1>
      <div className="grid__container">
        <div className="grid" id="gridid">
          {photosArr
            .map((photo) => (
              <img src={photo} key={photo} className="grid__img" alt=""></img>
            ))
            .slice(0, 16)}
        </div>
      </div>
    </main>
  );
};

export default Searchmain;
