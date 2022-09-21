import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Awards.css";

// *****************
// *** AWARDCARD ***
// *****************
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__awards_laurels-card">
    {/* ************* */}
    {/* *** Image *** */}
    {/* ************* */}
    <img src={imgUrl} alt="award" />
    {/* *************** */}
    {/* *** Content *** */}
    {/* *************** */}
    <div className="app__awards_laurels-content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

// *******************
// *** MAIN SECTION***
// *******************
const Awards = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__bg app__wrapper section__padding" id="awards">
    {/* ******************** */}
    {/* *** LEFT SECTION *** */}
    {/* ******************** */}
    <div className="app__wrapper_info">
      {/* *************** */}
      {/* *** Heading *** */}
      {/* *************** */}
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Achievements</h1>
      {/* ******************* */}
      {/* *** Award Cards *** */}
      {/* ******************* */}
      <div className="app__awards_laurels">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    {/* ********************* */}
    {/* *** RIGHT SECTION *** */}
    {/* ********************* */}
    <div className="app__wrapper_img">
      <img
        src={images.awards}
        alt="chicken escalope with cherry tomatoes, asparagus, sweetcorn and rosemary"
      />
    </div>
  </div>
);

export default Awards;
