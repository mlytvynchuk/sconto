import { combineReducers } from "redux";
import discountReducer from "./discountReducer";
import authReducer from './authReducer';
export default combineReducers({
  discounts: discountReducer,
  auth: authReducer,
});