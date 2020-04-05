import React from "react";
import "./Home.css";
import "../../components/CustomButton/CustomButton.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";

const Home = () => {
  return (
    <div className="background-new">
      <h1 className="title">
        PHOTOGRAPHE
        <br />
        OUED ZARGA
      </h1>
      <button className="button" id="contact-button">
        contact
      </button>
      <SocialIcons />
    </div>
  );
};

export default Home;
