import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import GalleryGrid from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Fragment>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/gallery' component={GalleryGrid} />
      <Route exact path='/contact' component={Contact} />
      </Switch>
      </Fragment>
    </Router>
  );
};

export default App;