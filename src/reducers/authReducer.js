import * as actionTypes from "../actions/index";
import { updObj } from "../utilities/utility";

const initialState = {
  token: null,
  error: null,
  loading: false,
  user: 0,
};

const authStart = (state, action) => {
  return updObj(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updObj(state, {
    token: action.token,
    loading: false,
    error: null,
  });
};

const authFail = (state, action) => {
  return updObj(state, {
    error: action.error,
    loading: false,
    token: null,
  });
};

const authLogout = (state, action) => {
  return updObj(state, {
    token: null,
    error: action.error,
    loading: false,
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);

    case actionTypes.GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
