import React from "react";
import "./filter.styles.scss";
import Select from "react-select";

const Filter = ({
  handleTypeChange,
  handleBreedChange,
  selectAnimalTypes,
  selectAnimalBreeds,
}) => {
  return (
    <div className="sidebar">
      <p className="sidebar__title">Filter Animals</p>
      <p className="sidebar__select_title">Animal Types</p>
      <Select
        name="Animal types"
        options={
          selectAnimalTypes.length === 0
            ? []
            : selectAnimalTypes.types.map((type) => ({
                value: type.name,
                label: type.name,
              }))
        }
        onChange={handleTypeChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <p className="sidebar__select_title">Animal Breeds</p>
      <Select
        name="Animal breeds"
        options={
          selectAnimalBreeds.length === 0
            ? []
            : selectAnimalBreeds.breeds.map((type) => ({
                value: type.name,
                label: type.name,
              }))
        }
        onChange={handleBreedChange}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};

export default Filter;
