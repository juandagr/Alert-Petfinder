import React from "react";

import "./pets-list.styles..scss";

import PetCard from "../pet-card/pet-card.component";

/**
 * Component to display a list of PetCard components, it receives an array of pets
 */
const PetsList = ({ pets }) => (
  <div className="pets-list-container">
    <div className="pets-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  </div>
);

export default PetsList;
