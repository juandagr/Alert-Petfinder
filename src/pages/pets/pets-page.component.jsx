import React, { Component } from "react";

import "./pets-page.styles.scss";

import { createStructuredSelector } from "reselect";
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

import PetsList from "./../../components/pets-list/pets-list.component";
import Pagination from "react-js-pagination";

import Filter from "../../components/filter/filter.component";

/**
 * Component thats display the list of pets in a page, this is the principal page
 */
class PetsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petsPerPage: 24,
      animalType: "",
      animalBreed: "",
    };
  }

  componentDidMount() {
    const { getPetsStart, getAnimalTypesStart } = this.props;
    getAnimalTypesStart();
    getPetsStart({ petsPerPage: this.state.petsPerPage, pageNumber: 1 });
  }

  handlePageChange = (pageNumber) => {
    const { getPetsStart } = this.props;
    getPetsStart({
      type: this.state.AnimalType,
      petsPerPage: this.state.petsPerPage,
      pageNumber: pageNumber,
      breed: "",
    });
  };

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

    this.setState({ animalBreed: event.value });
    getPetsStart({
      type: this.state.animalType,
      breed: event.value,
      petsPerPage: this.state.petsPerPage,
      pageNumber: 1,
    });
  };

  render() {
    const {
      selectCurrentPage,
      selectTotalPets,
      selectAnimalTypes,
      selectCurrentPets,
      selectAnimalBreeds,
    } = this.props;
    return (
      <div className="pets-list-page">
        <div className="banner">
          <div className="banner__text-box">
            <h1 className="banner__text-box__title">Alert Petfinder</h1>
            <h2 className="banner__text-box__subtitle">Find the perfet pet!</h2>
          </div>
        </div>
        <div className="sidebar">
          <Filter
            handleTypeChange={this.handleTypeChange}
            handleBreedChange={this.handleBreedChange}
            selectAnimalTypes={selectAnimalTypes}
            selectAnimalBreeds={selectAnimalBreeds}
          />
        </div>
        <PetsList pets={selectCurrentPets} />
        <Pagination
          activePage={selectCurrentPage}
          itemsCountPerPage={this.state.petsPerPage}
          totalItemsCount={selectTotalPets}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
          innerClass={"pagination"}
          itemClass={"item"}
          linkClass={"link"}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  selectCurrentPage: selectCurrentPage,
  selectTotalPets: selectTotalPets,
  selectAnimalTypes: selectAnimalTypes,
  selectCurrentPets: selectCurrentPets,
  selectAnimalBreeds: selectAnimalBreeds,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsStart: (params) => dispatch(getPetsStart(params)),
  getAnimalTypesStart: () => dispatch(getAnimalTypesStart()),
  getAnimalBreedsStart: (params) => dispatch(getAnimalBreedsStart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsPage);
