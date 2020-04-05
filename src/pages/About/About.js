import React from "react";
import img1 from "../../assets/images/img1.jpg";
import canon from "../../assets/images/Canon.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img src={img1} id="img" className="img-thumbnail"/>
        </div>

        <div className="col-sm-8">
          Hi ,my name is Houssem Jandoubi who lives in oued zarga.I love taking
          pictures of everything but mostly i am obsessed with nature
        </div>
      </div>
      <img src={canon} />
      <p>i use this camera to make magic.</p>
    </div>
  );
};

export default About;
