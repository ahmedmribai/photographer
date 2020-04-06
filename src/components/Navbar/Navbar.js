import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/brand4.png";

const Navbar2 = () => {
  document.addEventListener("DOMContentLoaded", function () {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    const myFunction = () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    // When the user scrolls the page, execute myFunction
    window.addEventListener("scroll", myFunction);

    // Get the navbar
    let navbar = document.getElementById("navbar");

    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;
  });
  return (
    <div className="nav" id="navbar">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header" style={{paddingRight:'50px'}}>
      <a className="navbar-brand" href="/">
        <img  src={logo} alt="Logo" className="logo" />
        </a>  
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links" style={{float: 'right'}}>
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar2;
