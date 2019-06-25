import  * as actionTypes from ".";

export const userReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_USER:
            return action.payload;
        default:
            return state;
    }
}