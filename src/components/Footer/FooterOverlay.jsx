import React from "react";
import "./FooterOverlay.css";

const FooterOverlay = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__footerOverlay">
    {/* *************** */}
    {/* *** Overlay *** */}
    {/* *************** */}
    <div className="app__footerOverlay-black" />
    {/* ********************* */}
    {/* *** Overlay Image *** */}
    {/* ********************* */}
    <div className="app__footerOverlay-img app__bg" />
  </div>
);

export default FooterOverlay;
