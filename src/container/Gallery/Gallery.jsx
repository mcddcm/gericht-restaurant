import React, { useRef } from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const Gallery = () => {
  // **************
  // *** USEREF ***
  // **************
  const scrollRef = useRef(null);

  // **********************
  // *** SCROLL HANDLER ***
  // **********************
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // *******************
  // *** IMAGE ARRAY ***
  // *******************
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    // ***************
    // *** WRAPPER ***
    // ***************
    <div className="app__gallery flex__center">
      {/* *************** */}
      {/* *** CONTENT *** */}
      {/* *************** */}
      <div className="app__gallery-content">
        {/* *************** */}
        {/* *** Heading *** */}
        {/* *************** */}
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        {/* ******************* */}
        {/* *** Description *** */}
        {/* ******************* */}
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          placeat aliquam blanditiis amet sapiente a, unde veniam.
        </p>
        {/* ************** */}
        {/* *** Button *** */}
        {/* ************** */}
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
      {/* ********************* */}
      {/* *** IMAGE GALLERY *** */}
      {/* ********************* */}
      <div className="app__gallery-images">
        {/* *********************** */}
        {/* *** Image Container *** */}
        {/* *********************** */}
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            //  Image Card
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image=${index + 1}`}
            >
              <img src={image} alt="Instagram gallery" />
              {/* IG icon */}
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        {/* ********************* */}
        {/* *** Arrow Buttons *** */}
        {/* ********************* */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__icon-arrow"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__icon-arrow"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
