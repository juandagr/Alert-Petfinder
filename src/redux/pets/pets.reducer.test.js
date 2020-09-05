import * as petsTypes from "./pets.types";
import * as reducer from "./pets.reducer";

describe("pets reducer", () => {
  const initialStateMock = {
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
   * tests for pets reducer
   */
  it("should return the initial state", () => {
    expect(reducer.default(undefined, {})).toEqual(initialStateMock);
  });

  it("should handle GET_PETS_START", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_PETS_START,
        payload: {},
      })
    ).toEqual({ ...initialStateMock, petsList: [], isPetsFetching: true });
  });

  it("should handle GET_PETS_SUCCESS", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_PETS_SUCCESS,
        payload: {
          pets: {
            animals: ["animal1", "animal2", "animal3"],
            pagination: { current_page: 1, total_count: 500 },
          },
        },
      })
    ).toEqual({
      ...initialStateMock,
      petsList: ["animal1", "animal2", "animal3"],
      isPetsFetching: false,
      currentPage: 1,
      totalPets: 500,
    });
  });

  it("should handle GET_TYPES_SUCCESS", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_TYPES_SUCCESS,
        payload: {
          animalTypes: {
            data: ["type1", "type2", "type3"],
          },
        },
      })
    ).toEqual({
      ...initialStateMock,
      animalTypes: ["type1", "type2", "type3"],
    });
  });

  it("should handle GET_BREEDS_SUCCESS", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_BREEDS_SUCCESS,
        payload: {
          animalBreeds: {
            data: ["breed1", "breed2", "breed3"],
          },
        },
      })
    ).toEqual({
      ...initialStateMock,
      animalBreeds: ["breed1", "breed2", "breed3"],
    });
  });

  it("should handle GET_DETAILS_SUCCESS", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_DETAILS_SUCCESS,
        payload: {
          animalDetails: {
            data: { data1: "a", data2: "b" },
          },
        },
      })
    ).toEqual({
      ...initialStateMock,
      animalDetails: { data1: "a", data2: "b" },
    });
  });

  it("should handle GET_PETS_FAILURE", () => {
    expect(
      reducer.default(initialStateMock, {
        type: petsTypes.default.GET_PETS_FAILURE,
        payload: {
          data1: "a",
          data2: "b",
        },
      })
    ).toEqual({
      ...initialStateMock,
      error: {
        data1: "a",
        data2: "b",
      },
    });
  });
});
