import { combineReducers } from "redux";
import discountReducer from "./discountReducer";
import authReducer from './authReducer';
import filterReducer from './filterReducer'

export default combineReducers({
  discounts: discountReducer,
  auth: authReducer,
  filters: filterReducer
});