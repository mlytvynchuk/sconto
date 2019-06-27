import {
  FETCH_DISCOUNTS_FAIL,
  FETCH_DISCOUNTS_BEGIN,
  FETCH_DISCOUNTS_SUCCESS,
  SELECT_FOOD_CATEGORY,
  SELECT_TIME_SLOT,
  HANDLE_SEARCH_BUTTON_CLICK,
  ADDED_TO_LIKES,
  DELETE_FROM_LIKES,
  FETCH_LIKES_SUCCESS
} from "./index";
import store from '../store/index'
import Axios from "axios";

export function fetchDiscountsBegin() {
  return {
    type: FETCH_DISCOUNTS_BEGIN
  };
}

export function fetchDiscountsSuccess(discounts) {
  return {
    type: FETCH_DISCOUNTS_SUCCESS,
    payload: discounts
  };
}

export function fetchDiscountsFail(error) {
  return {
    type: FETCH_DISCOUNTS_FAIL,
    payload: error
  };
}

export function fetchDiscounts() {
  
  return dispatch => {
    dispatch(fetchDiscountsBegin());
    return fetch("http://localhost:8000/api/discounts/")
      .then(handleErrors)
      .then(response => response.json())
      .then(result => {
        dispatch(fetchDiscountsSuccess(result));
        return result;
      })
      .catch(error => dispatch(fetchDiscountsFail(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function addFoodCategory(event) {
  return {
    type: SELECT_FOOD_CATEGORY,
    payload: event.target.value
  };
}

export function addTimeSlot(event) {
  return {
    type: SELECT_TIME_SLOT,
    payload: event.target.value
  };
}

export function fetchTimeSlot(time) {
  return {
    type: SELECT_TIME_SLOT,
    payload: time
  };
}

export function handleSearchButtonClick( search= "", foodCategory = "", timeSlot = "") {
  return {
    type: HANDLE_SEARCH_BUTTON_CLICK,
    payload: {
      timeSlot,
      foodCategory,
      search,
    }
  };
}
export function addToFavorite(like){
  
  return {
    type: ADDED_TO_LIKES,
    payload: like
  };
}
export function addedToFavorites(discountId) {
  return dispatch => {
    
    Axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + store.getState().auth.token,
      
  }
  const likedElem = store.getState().discounts.discounts.find(discount =>  discount.id === discountId);
  const checkId = store.getState().discounts.favorites.find(like => like.discount.id === likedElem.id);
  if (!checkId){
    Axios.post('http://localhost:8000/api/likes/', {
    discount: discountId
      }).then(res => {
          dispatch(addToFavorite(res.data))
          dispatch(fetchFavorites());
        }).catch(err => console.log(err));
  }else{
    console.log(
      "You`ve already liked this"
    )
  } 
 }  
}

export function deleteFromLikes(discountId) {
  return {
  type: DELETE_FROM_LIKES,
  payload: discountId 
  };
}
export function fetchFavoritesSuccess(favorites){
  return {
    type: FETCH_LIKES_SUCCESS,
    payload: favorites
  }
}
export function fetchFavorites(){
  return dispatch => {
   
    let user = store.getState().auth.user;
    Axios.defaults.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: 'Token ' + store.getState().auth.token
  }
    return Axios.get(`http://localhost:8000/api/likes/${user.id}/`)
      .then(result => {
        dispatch(fetchFavoritesSuccess(result.data));
       
      })
      .catch(error => console.log(error));
  }
      
}