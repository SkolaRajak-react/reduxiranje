import * as actionTypes from "./constants";

const initialState = {
  movies: ["Harry Potter", "Avengers", "Spiderman"]
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        movies: [...state.movies, action.payload]
      };
    case actionTypes.RESET_MOVIES:
      return {
        movies: []
      };
    default:
      return state;
  }
}
