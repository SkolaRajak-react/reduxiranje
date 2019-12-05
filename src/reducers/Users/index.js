import * as actionTypes from "./constants";

const initialState = {
  username: "Jovan",
  loading: false,
  error: "",
  user: {},
  users: []
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USERNAME: {
      return { username: action.payload };
    }
    case actionTypes.GET_USERS_START: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_USERS_SUCCESS: {
      return { ...state, users: action.payload, loading: false };
    }
    case actionTypes.GET_USERS_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    case actionTypes.CREATE_USER_START: {
      return { ...state, loading: true };
    }
    case actionTypes.CREATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        users: [...state.users, action.payload],
        loading: false
      };
    }
    case actionTypes.CREATE_USER_FAILURE: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
