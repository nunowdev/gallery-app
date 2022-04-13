import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Image from "./pages/Image";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Search" exact element={<Search />} />
        <Route path="/Image" exact element={<Image />} />
      </Routes>
    </Router>
  );
}

export default App;
