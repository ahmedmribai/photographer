import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./SocialIcons.css";
const SocialIcons = () => {
  return (
    <div>
      <h1 className="social-title">Follow me</h1>
      <p className="social-box">
        <a
          href="https://www.youtube.com/user/27232983"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com/OuedZarga"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/houssemjendoubi/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/houssem-jendoubi-aa722a54/" className="twitter social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </p>
    </div>
  );
};

export default SocialIcons;
