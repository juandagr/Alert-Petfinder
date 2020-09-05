import { Client } from "@petfinder/petfinder-js";
import { APIKEY, SECRET } from "./config";

/**
 * CLient that allow us to get the data from the petfinderAPI
 * this is should be configured using the config.js file
 */
const client = new Client({
  apiKey: APIKEY,
  secret: SECRET,
});

/**
 * function to get the animals using the params for filter
 */
export const getAnimalsAPI = (params) => {
  if (params.length > 0) {
    return client.animal.search();
  } else {
    return client.animal.search({
      type: params.type,
      page: params.pageNumber,
      limit: params.petsPerPage,
      breed: params.breed,
    });
  }
};

/**
 * function to get the animal types
 */
export const getAnimalTypesAPI = () => {
  return client.animalData.types();
};

/**
 * function to get the animal breeds depending the type
 */
export const getAnimalBreedsAPI = (type) => {
  return client.animalData.breeds(type);
};

/**
 * function to get the animal breeds depending the type
 */
export const getAnimalDetailsAPI = (id) => {
  return client.animal.show(id);
};
