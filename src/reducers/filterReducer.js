import { GET_CATEGORY, GET_TIME } from "../actions";


const initialState = {
    categories: [],
    times: [],
}
const filterReducer = (state= initialState,action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case GET_TIME:
            return {
                ...state,
                times: action.payload
            }
        default:
            return state;
    }
}
export default filterReducer;