import {FETCH_DISCOUNTS_FAIL, FETCH_DISCOUNTS_BEGIN, FETCH_DISCOUNTS_SUCCESS} from './index'

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