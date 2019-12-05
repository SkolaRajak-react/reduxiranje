import * as actionTypes from "./constants";
import axios from "axios";

export const createUser = user => {
  return async dispatch => {
    dispatch({ type: actionTypes.CREATE_USER_START });
    try {
      const response = await axios.post('http://localhost:8081/users', {
        user
      })
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return dispatch({
          type: actionTypes.CREATE_USER_SUCCESS,
          payload: response.data
        });
      } else {
        throw response.data;
      }
    } catch (error) {
      console.log(error)
      return dispatch({type: actionTypes.CREATE_USER_FAILURE})
    }
  }
}

export const getUsers = () => {
  return async dispatch => {
    dispatch({ type: actionTypes.GET_USERS_START });
    try {
      const response = await axios.get("http://localhost:8081/users");
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        return dispatch({
          type: actionTypes.GET_USERS_SUCCESS,
          payload: response.data
        });
      } else {
        throw response.data;
      }
    } catch (error) {
      console.log(error);
      return dispatch({
        type: actionTypes.GET_USERS_FAILURE,
        payload: error.message
      });
    }
  };
};
