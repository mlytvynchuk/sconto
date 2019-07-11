import {
    GET_TIME,
    GET_TIME_FAILURE,
    GET_CATEGORY,
    GET_CATEGORY_FAILURE,
    GET_OVERLAY,
    GET_OVERLAY_FAILURE,
    GET_HEIGHT,
    GET_HEIGHT_FAILURE
} from ".";
import Axios from "axios";
import {
    DOMAIN
} from '../settings';

// Time fetching
const fetchTimeSuccess = (listOfTime) => {
    return {
        type: GET_TIME,
        payload: listOfTime
    }
}
const fetchTimeFailure = (error) => {
    return {
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
    return {
        type: GET_CATEGORY,
        payload: listOfCategory
    }
}

const fetchCategoryFailure = (error) => {
    return {
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

// overlay fetching
const fetchOverlaySuccess = (listOfOverlay) => {
    return {
        type: GET_OVERLAY,
        payload: listOfOverlay
    }
}

const fetchOverlayFailure = (error) => {
    return {
        type: GET_OVERLAY_FAILURE,
        payload: error
    }
}

export const fetchOverlay = () => {
    return dispatch => {
        Axios.get(`${DOMAIN}/api/overlay/`)
            .then((res) => {
                dispatch(fetchOverlaySuccess(res.data));
            })
            .catch(e => {
                dispatch(fetchOverlayFailure(e))
            })
    }
}

// height fetching
const fetchHeightSuccess = (listOfHeight) => {
    return {
        type: GET_HEIGHT,
        payload: listOfHeight
    }
}

const fetchHeightFailure = (error) => {
    return {
        type: GET_HEIGHT_FAILURE,
        payload: error
    }
}

export const fetchHeight = () => {
    return dispatch => {
        Axios.get(`${DOMAIN}/api/height/`)
            .then((res) => {
                dispatch(fetchHeightSuccess(res.data));
            })
            .catch(e => {
                dispatch(fetchHeightFailure(e))
            })
    }
}