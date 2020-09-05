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
  selectCurrentPets,
  selectError,
} from "../../redux/pets/pets.selectors";

import Pagination from "react-js-pagination";

import Filter from "../../components/filter/filter.component";
import PetListContainer from "../../components/pets-list/pets-list.container";
import ErrorDisplay from "../../components/error-display/error-display.component";

/**
 * Component thats display the list of pets in a page, this is the principal page
 */
class PetsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petsPerPage: 24,
    };
  }

  componentDidMount() {
    const { getPetsStart, getAnimalTypesStart } = this.props;

    // load the animals
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

  render() {
    const {
      selectCurrentPage,
      selectTotalPets,
      selectCurrentPets,
      selectError,
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
          <Filter />
        </div>
        {selectError ? <ErrorDisplay /> : null}
        <PetListContainer pets={selectCurrentPets} />
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
  selectCurrentPets: selectCurrentPets,
  selectError: selectError,
});

const mapDispatchToProps = (dispatch) => ({
  getPetsStart: (params) => dispatch(getPetsStart(params)),
  getAnimalTypesStart: () => dispatch(getAnimalTypesStart()),
  getAnimalBreedsStart: (params) => dispatch(getAnimalBreedsStart(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PetsPage);
