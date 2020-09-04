import React from "react";

import "./detail-list.styles.scss";

import { IoIosCheckmark, IoIosClose } from "react-icons/io";

/**
 * Component to display the lsits for attributes and environment details from the pet
 */
const DetailLists = ({ attributes, environment }) => (
  <div className="detail-lists-container">
    <div className="environment-container">
      <div className="attribute">
        {attributes.house_trained ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p>House trained</p>
      </div>
      <div className="attribute">
        {attributes.spayed_neutered ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p className="name">Spayed neutered</p>
      </div>
      <div className="attribute">
        {attributes.special_needs ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p className="name">Special needs</p>
      </div>
    </div>
    <div className="environment-container">
      <div className="attribute">
        {environment.cats ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p>Cats</p>
      </div>
      <div className="attribute">
        {environment.children ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p className="name">Children</p>
      </div>
      <div className="attribute">
        {environment.dogs ? (
          <IoIosCheckmark className="icon" />
        ) : (
          <IoIosClose className="icon" />
        )}
        <p className="name">Dogs</p>
      </div>
    </div>
  </div>
);

export default DetailLists;
