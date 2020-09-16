import { GET_CATEGORY, GET_TIME, GET_HEIGHT, GET_OVERLAY } from "../actions";

const initialState = {
  categories: [],
  times: [],
  overlays: [],
  heights: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_TIME:
      return {
        ...state,
        times: action.payload,
      };
    case GET_HEIGHT:
      return {
        ...state,
        heights: action.payload,
      };
    case GET_OVERLAY:
      return {
        ...state,
        overlays: action.payload,
      };
    default:
      return state;
  }
};
export default filterReducer;
