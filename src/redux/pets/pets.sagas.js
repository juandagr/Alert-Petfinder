import { all, call, takeLatest, put } from "redux-saga/effects";

import PetsTypes from "./pets.types";

import {
  getPetsSuccess,
  getPetsFailure,
  getAnimalTypesFailure,
  getAnimalTypesSuccess,
  getAnimalBreedsSuccess,
  getAnimalBreedsFailure,
  getAnimalDetailsSuccess,
  getAnimalDetailsFailure,
} from "./pets.actions";

import {
  getAnimalsAPI,
  getAnimalTypesAPI,
  getAnimalBreedsAPI,
  getAnimalDetailsAPI,
} from "../../petfinder-api/pets";

/**
 * Sagas to intercept the actions and make the api calls to get the data
 */

export function* getPets({
  payload: { type, breed, petsPerPage, pageNumber },
}) {
  try {
    const petsData = yield getAnimalsAPI({
      type,
      breed,
      petsPerPage,
      pageNumber,
    });
    yield put(
      getPetsSuccess({
        pets: petsData.data,
      })
    );
  } catch (error) {
    put(call(getPetsFailure(error)));
  }
}

export function* getAnimalTypes() {
  try {
    const animalTypes = yield getAnimalTypesAPI();
    yield put(
      getAnimalTypesSuccess({
        animalTypes: animalTypes,
      })
    );
  } catch (error) {
    put(call(getAnimalTypesFailure(error)));
  }
}

export function* getAnimalBreeds({ payload }) {
  try {
    const animalBreeds = yield getAnimalBreedsAPI(payload);
    yield put(
      getAnimalBreedsSuccess({
        animalBreeds: animalBreeds,
      })
    );
  } catch (error) {
    put(call(getAnimalBreedsFailure(error)));
  }
}

export function* getAnimalDetails({ payload }) {
  try {
    const animalDetails = yield getAnimalDetailsAPI(payload);
    yield put(
      getAnimalDetailsSuccess({
        animalDetails: animalDetails,
      })
    );
  } catch (error) {
    put(call(getAnimalDetailsFailure(error)));
  }
}

export function* onGetPetsStart() {
  yield takeLatest(PetsTypes.GET_PETS_START, getPets);
}

export function* onGetAnimalTypesStart() {
  yield takeLatest(PetsTypes.GET_TYPES_START, getAnimalTypes);
}

export function* onGetAnimalBreedsStart() {
  yield takeLatest(PetsTypes.GET_BREEDS_START, getAnimalBreeds);
}

export function* onGetAnimalDetailsStart() {
  yield takeLatest(PetsTypes.GET_DETAILS_START, getAnimalDetails);
}

export function* petsSagas() {
  yield all([
    call(onGetPetsStart),
    call(onGetAnimalTypesStart),
    call(onGetAnimalBreedsStart),
    call(onGetAnimalDetailsStart),
  ]);
}
