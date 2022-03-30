import React from "react";
import gridimage from "../assets/gridtestimage.jpg";
import Footer from "./Footer";

const Searchmain = () => {
  return (
    <main id="search__main">
      <h1 class="searched__title">"Wtv is searched"</h1>
      <div className="grid__container">
        <div className="grid">
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
          <img src={gridimage} className="grid__img"></img>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Searchmain;
