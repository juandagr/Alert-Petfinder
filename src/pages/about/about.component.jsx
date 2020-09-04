import React from "react";

import "./about.styles.scss";

/**
 * Component that the info of this app in a page
 */
const About = () => (
  <div className="about-page">
    <h1 className="title">About</h1>
    <div className="photo-container">
      <img
        className="photo"
        src={require("./../../assets/photo.png")}
        alt="Juan Daniel Galarza"
      />
    </div>
    <div className="text-container">
      <p className="text">
        This page was created by Juan Daniel Galarza. All the information of the
        pets is bringed from The Petfinder API. The Petfinder API allows us to
        access the Petfinder database of hundreds of thousands of pets ready for
        adoption and over ten thousand animal welfare organizations. If you want
        know more about this, you can visit the next page:
        <a
          className="text-button"
          href="https://www.petfinder.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.petfinder.com/
        </a>
        .
      </p>
    </div>
  </div>
);

export default About;
