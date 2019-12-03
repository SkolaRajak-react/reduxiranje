import * as actionTypes from "./constants";

export const addMovie = movie => {
  return { type: actionTypes.ADD_MOVIE, payload: movie };
};

export const resetMovies = () => {
  return {type: actionTypes.RESET_MOVIES}
}
