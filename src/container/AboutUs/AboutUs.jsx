import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* *************** */}
    {/* *** OVERLAY *** */}
    {/* *************** */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    {/* ************************* */}
    {/* *** CONTENT CONTAINER *** */}
    {/* ************************* */}
    <div className="app__aboutus-content flex__center">
      {/* **************** */}
      {/* *** About Us *** */}
      {/* **************** */}
      <div className="app__aboutus-content_about">
        {/* ************* */}
        {/* *** Title *** */}
        {/* ************* */}
        <h1 className="headtext__cormorant">About Us</h1>
        {/* ***************** */}
        {/* *** Spoon Img *** */}
        {/* ***************** */}
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        {/* *************** */}
        {/* *** Content *** */}
        {/* *************** */}
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
          consequuntur facilis deleniti voluptate modi, eligendi harum? Suscipit
          aliquam, enim esse est perferendis explicabo.
        </p>
        {/* ************** */}
        {/* *** Button *** */}
        {/* ************** */}
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      {/* ***************** */}
      {/* *** Knife Img *** */}
      {/* ***************** */}
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      {/* ******************* */}
      {/* *** Our History *** */}
      {/* ******************* */}
      <div className="app__aboutus-content_history">
        {/* ************* */}
        {/* *** Title *** */}
        {/* ************* */}
        <h1 className="headtext__cormorant">Our History</h1>
        {/* ***************** */}
        {/* *** Spoon Img *** */}
        {/* ***************** */}
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        {/* *************** */}
        {/* *** Content *** */}
        {/* *************** */}
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa unde
          consequuntur facilis deleniti voluptate modi, eligendi harum? Suscipit
          aliquam, enim esse est perferendis explicabo.
        </p>
        {/* ************** */}
        {/* *** Button *** */}
        {/* ************** */}
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
