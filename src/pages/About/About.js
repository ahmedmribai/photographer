import React from "react";
import img1 from "../../assets/images/img1.jpg";
import nikon from "../../assets/images/nikon.jpg";

const About = () => {
  return (
    <div className="about" style={{ paddingTop: "100px", zIndex: "auto",marginLeft:"2%" ,marginRight:'2%'}}>
      <div className="row">
        <div className="col-sm-4">
          <img src={img1} id="img" className="img-thumbnail" />
        </div>

        <div className="col-sm-8" style={{ fontSize: "3vw" ,paddingTop:'50px'  }}>
          Hi ,my name is Houssem Jandoubi who lives in oued zarga.I love taking
          pictures of everything but mostly i am obsessed with nature.
        </div>
      </div>
      <span></span>
      <div className="row">
        <div className="col-sm-4">
          <p style={{ fontSize: "3vw" ,paddingTop:'15px' }}>i use this camera to make magic.</p>
        </div>
        <div className="col-sm-8">
          <img src={nikon} className="canon-img" className="img-thumbnail" />
        </div>
      </div>
      <p style={{ fontSize: "3vw" }}>
        The Nikon D5200 is an F-mount DSLR camera with a newly developed
        24.1-megapixel DX-format CMOS image sensor[2] first announced by Nikon
        on November 6, 2012 for most of the world[3] and January 7, 2013 for the
        North American market.[4] The Toshiba TOS-5105 (HEZ1) APS-C CMOS Image
        Sensor[5][6] features 14-bit resolution NEF (RAW) and ISO 6400,
        expandable to 25,600.[3] The D5200 integrates the same Multi-CAM 4800DX
        autofocus system as the D7000. The camera replaces the D5100 and is
        replaced by the Nikon D5300.
      </p>
    </div>
  );
};

export default About;
