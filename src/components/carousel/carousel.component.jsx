import React from "react";

import "./carousel.styles.scss";

import { Carousel } from "react-responsive-carousel";

/**
 * Component to display a carousel with the pet photos
 */
const CarouselDetails = ({ photos, status }) => (
  <div className="carousel-container">
    <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
      {photos.map((photo) => (
        <div key={photo.large}>
          <img src={photo.large} alt="photo1" />
        </div>
      ))}
    </Carousel>
    <p className="status">{status.toUpperCase()}</p>
  </div>
);

export default CarouselDetails;
