import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__bg app__wrapper section__padding" id="contact">
    {/* ******************** */}
    {/* *** LEFT SECTION *** */}
    {/* ******************** */}
    <div className="app__wrapper_info">
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      {/* *************** */}
      {/* *** Content *** */}
      {/* *************** */}
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#dcca87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00am - 02:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am - 03:00am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Vist Us
      </button>
    </div>
    {/* ********************* */}
    {/* *** RIGHT SECTION *** */}
    {/* ********************* */}
    <div className="app__wrapper_img">
      <img
        src={images.findus}
        alt="iced cocktail with herbs and a slice of lemon infront of a pepper mill and a whole lime"
      />
    </div>
  </div>
);
export default FindUs;
