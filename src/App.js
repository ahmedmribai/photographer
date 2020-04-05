import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import GalleryGrid from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />*/}
      {/*<About />*/}
      {/*<GalleryGrid />*/}
      <Contact />
    </div>
  );
};

export default App;