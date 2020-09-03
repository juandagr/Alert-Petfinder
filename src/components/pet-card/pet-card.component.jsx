import React from "react";

import "./pet-card.styles.scss";
import { withRouter } from "react-router-dom";

/**
 * Component to display the basic data of a pet, it receives the info of the pet to display it
 */
const PetCard = ({ pet, history, match }) => (
  <div
    className="pet-card"
    onClick={() => history.push(`${match.url}${"details/"}${pet.id}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${
          pet.primary_photo_cropped != null
            ? pet.primary_photo_cropped.medium
            : require("../../assets/unknown.jpg")
        })`,
      }}
    />
    <div className="name-container">
      <h3>{pet.name}</h3>
    </div>
  </div>
);

export default withRouter(PetCard);
