import { combineReducers } from "redux";
import discountReducer from "./discountReducer";
import authReducer from './authReducer';
// import userReducer  from "./userReducer";
export default combineReducers({
  discounts: discountReducer,
  auth: authReducer,
  // user: userReducer,
});