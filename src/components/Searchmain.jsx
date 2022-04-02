import React, { useState, useRef } from "react";
import Axios from "axios";

const Searchmain = () => {
  const [photosArr, setPhotosArr] = useState([]);
  const arrayTest = [];
  const [searchedWord, setSearchedWord] = useState("");
  const inputRef = useRef();

  async function getPhotos() {
    const searchInput = document.getElementById("searchInput");
    setSearchedWord(searchInput.value);
    const requestedData = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${inputRef.current.value}&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&`
    );

    for (let i = 0; i < 10; ++i) {
      arrayTest.push(requestedData.data.results[i].urls.regular);
    }
    setPhotosArr(arrayTest);
    console.log(photosArr);

    //////////////////////////////////////////////////////////////////////
    //https://swr.vercel.app/docs/data-fetching

    // TESTA AQUILO TESTA AQUILO TESTA AQUILO
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
          ref={inputRef}
        />
        {/* <div
          className="searchnone"
          id="nosearchimage"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="1200"
        ></div> */}
      </div>
      {/* <h1 className="searched__title" id="searchtitle">{`${searchedWord}`}</h1> */}
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
