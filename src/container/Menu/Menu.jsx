import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./Menu.css";

const Menu = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__menu flex__center section__padding" id="menu">
    {/* *************** */}
    {/* *** HEADING *** */}
    {/* *************** */}
    <div className="app__menu-title">
      <SubHeading title="Menu that fits your palette" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    {/* *************** */}
    {/* *** CONTENT *** */}
    {/* *************** */}
    <div className="app__menu-content">
      {/* ******************* */}
      {/* *** Menu - Left *** */}
      {/* ******************* */}
      <div className="app__menu-content_wine flex__center">
        <p className="app__menu-content_heading">Wine & Beer</p>
        <div className="app__menu-content_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      {/* ******************** */}
      {/* *** Menu - Image *** */}
      {/* ******************** */}
      <div className="app__menu-content_img">
        <img src={images.menu} alt="cocktail shaker and fruit" />
      </div>
      {/* ******************** */}
      {/* *** Menu - Right *** */}
      {/* ******************** */}
      <div className="app__menu-content_cocktails flex__center">
        <p className="app__menu-content_heading">Cocktails</p>
        <div className="app__menu-content_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    {/* ************** */}
    {/* *** BUTTON *** */}
    {/* ************** */}
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default Menu;
