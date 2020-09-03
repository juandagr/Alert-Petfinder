import PetsTypes from "./pets.types";

/**
 * these are the actions that the pets reducer can perform
 */

// pets
export const getPetsStart = (params) => ({
  type: PetsTypes.GET_PETS_START,
  payload: params,
});

export const getPetsSuccess = (data) => ({
  type: PetsTypes.GET_PETS_SUCCESS,
  payload: data,
});

export const getPetsFailure = (error) => ({
  type: PetsTypes.GET_PETS_ERROR,
  payload: error,
});

// animal types
export const getAnimalTypesStart = () => ({
  type: PetsTypes.GET_TYPES_START,
});

export const getAnimalTypesSuccess = (data) => ({
  type: PetsTypes.GET_TYPES_SUCCESS,
  payload: data,
});

export const getAnimalTypesFailure = (error) => ({
  type: PetsTypes.GET_TYPES_FAILURE,
  payload: error,
});

// animal breeds
export const getAnimalBreedsStart = (params) => ({
  type: PetsTypes.GET_BREEDS_START,
  payload: params,
});

export const getAnimalBreedsSuccess = (data) => ({
  type: PetsTypes.GET_BREEDS_SUCCESS,
  payload: data,
});

export const getAnimalBreedsFailure = (error) => ({
  type: PetsTypes.GET_BREEDS_FAILURE,
  payload: error,
});

// animal details
export const getAnimalDetailsStart = (params) => ({
  type: PetsTypes.GET_DETAILS_START,
  payload: params,
});

export const getAnimalDetailsSuccess = (data) => ({
  type: PetsTypes.GET_DETAILS_SUCCESS,
  payload: data,
});

export const getAnimalDetailsFailure = (error) => ({
  type: PetsTypes.GET_DETAILS_FAILURE,
  payload: error,
});
