import { GET_TIME, GET_TIME_FAILURE, GET_CATEGORY, GET_CATEGORY_FAILURE } from ".";
import Axios from "axios";
import { DOMAIN } from "../settings";

// Time fetching
const fetchTimeSuccess = (listOfTime) => {
    return{
        type: GET_TIME,
        payload: listOfTime
    }
}
const fetchTimeFailure = (error) => {
    return{
        type: GET_TIME_FAILURE,
        payload: error
    }
}
export const fetchTime = () => {
    return dispatch => {
        Axios.get(`${DOMAIN}/api/time/`)
            .then((res) => {
                dispatch(fetchTimeSuccess(res.data));
            })
            .catch(e => {
                dispatch(fetchTimeFailure(e))
            })
    }
}

// Category fetching
const fetchCategorySuccess = (listOfCategory) => {
    return{
        type: GET_CATEGORY,
        payload: listOfCategory
    }
}

const fetchCategoryFailure = (error) => {
    return{
        type: GET_CATEGORY_FAILURE,
        payload: error
    }
}

export const fetchCategory = () => {
    return dispatch => {
        Axios.get(`${DOMAIN}/api/category/`)
            .then((res) => {
                dispatch(fetchCategorySuccess(res.data));
            })
            .catch(e => {
                dispatch(fetchCategoryFailure(e))
            })
    }
}