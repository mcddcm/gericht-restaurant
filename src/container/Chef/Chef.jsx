import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__bg app__wrapper section__padding">
    {/* ******************** */}
    {/* *** Chef - Image *** */}
    {/* ******************** */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="Chef Kevin Luo" />
    </div>
    {/* *************** */}
    {/* *** CONTENT *** */}
    {/* *************** */}
    <div className="app__wrapper_info">
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        {/* ******************************* */}
        {/* *** Quotation Marks - Image *** */}
        {/* ******************************* */}
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quotation marks" />
          {/* ******************** */}
          {/* *** Chef's Quote *** */}
          {/* ******************** */}
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Quos nulla nobis ipsam. Totam ut quis voluptatum! Aliquid culpa optio
          rerum ratione reprehenderit, illum natus modi quam deserunt sit
          provident voluptate.
        </p>
      </div>
      {/* ************************ */}
      {/* *** Chef's Signature *** */}
      {/* ************************ */}
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="Chef's signature" />
      </div>
    </div>
  </div>
);

export default Chef;
