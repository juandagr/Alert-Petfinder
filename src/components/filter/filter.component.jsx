import React from "react";
import "./filter.styles.scss";
import Select from "react-select";

import {
  getPetsStart,
  getAnimalTypesStart,
  getAnimalBreedsStart,
} from "../../redux/pets/pets.actions";
import { connect } from "react-redux";
import {
  selectCurrentPage,
  selectTotalPets,
  selectAnimalTypes,
  selectCurrentPets,
  selectAnimalBreeds,
} from "../../redux/pets/pets.selectors";
import { createStructuredSelector } from "reselect";

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animalType: "",
      animalBreed: "",
    };
  }

  componentDidMount() {
    const { getPetsStart, getAnimalTypesStart } = this.props;
    getAnimalTypesStart();
    getPetsStart({ petsPerPage: this.state.petsPerPage, pageNumber: 1 });
  }

  handleTypeChange = (event) => {
    const { getPetsStart, getAnimalBreedsStart } = this.props;

    this.setState({ animalType: event.value });
    getPetsStart({
      type: event.value,
      petsPerPage: this.state.petsPerPage,
      pageNumber: 1,
      breed: "",
    });
    getAnimalBreedsStart(event.value);
  };

  handleBreedChange = (event) => {
    const { getPetsStart } = this.props;
    getPetsStart({
      type: this.state.animalType,
      breed: event.value,
      petsPerPage: this.state.petsPerPage,
      pageNumber: 1,
    });
  };

  render() {
    const { selectAnimalTypes, selectAnimalBreeds } = this.props;
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
          onChange={this.handleTypeChange}
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
          onChange={this.handleBreedChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectAnimalTypes: selectAnimalTypes,
  selectCurrentPets: selectCurrentPets,
  selectAnimalBreeds: selectAnimalBreeds,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsStart: (params) => dispatch(getPetsStart(params)),
  getAnimalTypesStart: () => dispatch(getAnimalTypesStart()),
  getAnimalBreedsStart: (params) => dispatch(getAnimalBreedsStart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
