import React from "react";

import "./carousel.styles.scss";

import { Carousel } from "react-responsive-carousel";

/**
 * Component to display a carousel with the pet photos
 */
const CarouselDetails = ({ photos, status }) => (
  <div className="carousel-container">
    <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
      {photos
        ? photos.map((photo) => (
            <div key={photo.large}>
              <img src={photo.large} alt="photo1" />
            </div>
          ))
        : null}
    </Carousel>
    <p className="status">{status ? status.toUpperCase() : null}</p>
  </div>
);

export default CarouselDetails;
