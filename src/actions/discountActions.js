import {
    FETCH_DISCOUNTS_FAIL, 
    FETCH_DISCOUNTS_BEGIN, 
    FETCH_DISCOUNTS_SUCCESS, 
    ADD_FOOD_CATEGORY, 
    ADD_TIME_SLOT,
    HANDLE_SEARCH_BUTTON_CLICK,
} from './index'

export function fetchDiscountsBegin(){
    return {
        type: FETCH_DISCOUNTS_BEGIN,
    }
}
export function fetchDiscountsSuccess(discounts) {
    return {
        type: FETCH_DISCOUNTS_SUCCESS,
        payload: discounts
    }    
}
export function fetchDiscountsFail(error) {
    return {
        type: FETCH_DISCOUNTS_FAIL,
        payload: error
    }    
}

export function fetchDiscounts(){
    return dispatch => {
        dispatch(fetchDiscountsBegin());
        console.log("begin")
        return fetch('http://localhost:8000/discounts/')
            .then(handleErrors)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                dispatch(fetchDiscountsSuccess(result));
                return result;
            })
            .catch(error => dispatch(fetchDiscountsFail(error)));
    }
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

export function addFoodCategory(event) {
    return {
        type: ADD_FOOD_CATEGORY,
        payload: event.target.value
    }    
  }

export function addTimeSlot(event) {
    return {
        type: ADD_TIME_SLOT,
        payload: event.target.value,
    }
}
export function fetchTimeSlot(time) {
    return {
        type: ADD_TIME_SLOT,
        payload: time,
    }
}
export function handleSearchButtonClick(foodCategory, timeSlot) {
    return {
        type: HANDLE_SEARCH_BUTTON_CLICK,
        payload: {
            timeSlot,
            foodCategory
        }
    }
}