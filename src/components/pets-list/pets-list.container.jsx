import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import PetsList from "./pets-list.component";
import { selectPetsLoading } from "../../redux/pets/pets.selectors";

/**
 * Container pattern, using HigherOrderComponents to use the spinner loading
 */
const mapStateToPorps = createStructuredSelector({
  isLoading: selectPetsLoading,
});

const PetListContainer = compose(
  connect(mapStateToPorps),
  WithSpinner
)(PetsList);

export default PetListContainer;
