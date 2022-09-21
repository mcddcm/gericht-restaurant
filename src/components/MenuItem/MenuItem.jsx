import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__menuItem">
    {/* **************** */}
    {/* *** HEADINGS *** */}
    {/* **************** */}
    <div className="app__menuItem-head">
      {/* ************* */}
      {/* *** Title *** */}
      {/* ************* */}
      <div className="app__menuItem-name">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
      </div>
      {/* ************** */}
      {/* *** Spacer *** */}
      {/* ************** */}
      <div className="app__menuItem-dash" />
      {/* ************* */}
      {/* *** Price *** */}
      {/* ************* */}
      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    {/* ******************* */}
    {/* *** SUBHEADINGS *** */}
    {/* ******************* */}
    <div className="app__menuItem-sub">
      {/* ************ */}
      {/* *** Tags *** */}
      {/* ************ */}
      <p className="p__opensans" style={{ color: "#aaa" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
