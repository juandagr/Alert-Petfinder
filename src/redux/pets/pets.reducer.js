import PetsTypes from "./pets.types";

/**
 * initial state of the reducer
 */
const INITIAL_STATE = {
  petsList: [],
  error: null,
  isPetsFetching: false,
  currentPage: 1,
  limit: 24,
  totalPets: 0,
  animalTypes: [],
  animalBreeds: [],
  animalDetails: {},
};

/**
 * reducer with the state modifications depending of the action that the user perform
 */
const petsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PetsTypes.GET_PETS_START:
      return {
        ...state,
        petsList: [],
        isPetsFetching: true,
      };

    case PetsTypes.GET_PETS_SUCCESS:
      return {
        ...state,
        petsList: action.payload.pets.animals,
        isPetsFetching: false,
        currentPage: action.payload.pets.pagination.current_page,
        totalPets: action.payload.pets.pagination.total_count,
      };

    case PetsTypes.GET_TYPES_SUCCESS:
      return {
        ...state,
        animalTypes: action.payload.animalTypes.data,
      };

    case PetsTypes.GET_BREEDS_SUCCESS:
      return {
        ...state,
        animalBreeds: action.payload.animalBreeds.data,
      };

    case PetsTypes.GET_DETAILS_SUCCESS:
      return {
        ...state,
        animalDetails: action.payload.animalDetails.data,
      };

    case PetsTypes.GET_PETS_FAILURE:
    case PetsTypes.GET_TYPES_FAILURE:
    case PetsTypes.GET_BREEDS_FAILURE:
    case PetsTypes.GET_DETAILS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isPetsFetching: false,
      };

    default:
      return state;
  }
};

export default petsReducer;
