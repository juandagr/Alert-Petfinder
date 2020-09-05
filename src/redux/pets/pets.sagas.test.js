import * as petfinderApi from "../../petfinder-api/pets";
import { getAnimalTypes } from "./pets.sagas";
import { runSaga } from "redux-saga";

/**
 * suite to test sagas
 */
describe("sagas test suite", () => {
  describe("getAnimalTypes function", () => {
    it("should call api and dispatch success action", async () => {
      const typesMock = {
        data: [{ name: "type1" }, { name: "type2" }, { name: "type3" }],
      };
      const getAnimalTypesAPI = jest
        .spyOn(petfinderApi, "getAnimalTypesAPI")
        .mockImplementation(() => Promise.resolve(typesMock));
      const dispatched = [];
      const result = await runSaga(
        {
          dispatch: (action) => dispatched.push(action),
        },
        getAnimalTypes
      );

      expect(getAnimalTypesAPI).toHaveBeenCalledTimes(1);
      getAnimalTypesAPI.mockClear();
    });
  });
});
