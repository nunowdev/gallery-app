import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import AOS from "aos";
import nosearch from "../assets/undraw_search.png";
import Pagination from "./Pagination";

// S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU
//`https://api.unsplash.com/search/photos?query=dogs&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&per_page=30`

const Searchmain = () => {
  const homeSearchInput = localStorage.getItem("homeData");
  const [searchValue, setSearchValue] = useState(homeSearchInput);
  const inputTextRef = useRef();

  function handleSearch() {
    searchValue === [] ? setSearchValue(null) : renderPhotos(searchValue);
    if (searchValue !== null) {
      localStorage.removeItem("homeData");
      localStorage.setItem("displaySearch", searchValue);
    }
  }

  async function renderPhotos(searchValue) {
    setPhotos([]);
    const requestedData = await Axios.get(
      `https://api.unsplash.com/search/photos?query=${
        searchValue ||
        (homeSearchInput
          ? homeSearchInput
          : localStorage.getItem("displaySearch"))
      }&client_id=S1V-XtrLp6rvngz6YkmCg9tiEFlsZODnssVAEZTHYdU&per_page=30`
    );
    setPhotos(requestedData.data.results);
  }

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage] = useState(6);

  // Get Current Photos

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Hide things when no thing is searched
  useEffect(() => {
    renderPhotos();
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
          value={searchValue || ""}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(event) => event.key === "Enter" && handleSearch()}
        />
      </div>

      <div
        className="content__container"
        id="content__container"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <h1 className="searched__title" id="searchtitle" ref={inputTextRef}>
          Showing results for:&nbsp;
          <span className="colored">{searchValue}</span>
        </h1>
        <Pagination
          photosPerPage={photosPerPage}
          totalPhotos={photos.length}
          paginate={paginate}
          searchValue={searchValue}
        />
        <div className="grid__container">
          <div className="grid" id="gridid">
            {(homeSearchInput || searchValue) !== null &&
            (homeSearchInput || searchValue) !== "" &&
            photos[0] !== undefined ? (
              currentPhotos.map((photo) => (
                <img
                  src={photo.urls.regular || null}
                  key={photo.id}
                  className="grid__img"
                  alt=""
                ></img>
              ))
            ) : (
              <img src={nosearch} alt="" class="nosearchimage"></img>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Searchmain;
