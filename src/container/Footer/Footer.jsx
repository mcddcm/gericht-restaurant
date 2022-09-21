import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  // ***************
  // *** WRAPPER ***
  // ***************
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    {/* ************** */}
    {/* *** FOOTER *** */}
    {/* ************** */}
    <div className="app__footer-links">
      {/* ****************** */}
      {/* *** Contact Us *** */}
      {/* ****************** */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">353 King's Place, London, W1A 2NR, UK</p>
        <p className="p__opensans">+44 (0) 203 344 1230</p>
        <p className="p__opensans">+44 (0) 203 555 1230</p>
      </div>
      {/* ******************** */}
      {/* *** Logo+Socials *** */}
      {/* ******************** */}
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      {/* ********************* */}
      {/* *** Working Hours *** */}
      {/* ********************* */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00am - 11:00pm</p>
      </div>
    </div>
    {/* ***************** */}
    {/* *** COPYRIGHT *** */}
    {/* ***************** */}
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gerícht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
