import React from "react";

import "./pets-list.styles..scss";

import PetCard from "../pet-card/pet-card.component";

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
