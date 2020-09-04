import { createSelector } from "reselect";

/**
 * Selectors to get the data from the reducer
 */

const selectPets = (state) => state.pets;

export const selectCurrentPets = createSelector(
  [selectPets],
  (petsState) => petsState.petsList
);

export const selectCurrentPage = createSelector(
  [selectPets],
  (petsState) => petsState.currentPage
);

export const selectTotalPets = createSelector(
  [selectPets],
  (petsState) => petsState.totalPets
);

export const selectAnimalTypes = createSelector(
  [selectPets],
  (petsState) => petsState.animalTypes
);

export const selectAnimalBreeds = createSelector(
  [selectPets],
  (petsState) => petsState.animalBreeds
);

export const selectAnimalDetails = createSelector(
  [selectPets],
  (petsState) => petsState.animalDetails.animal
);

export const selectPetsLoading = createSelector([selectPets], (petsState) =>
  petsState.petsList.length === 0 ? true : false
);

export const selectError = createSelector(
  [selectPets],
  (petsState) => petsState.error
);
