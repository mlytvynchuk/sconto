import {
    FETCH_DISCOUNTS_FAIL,
    FETCH_DISCOUNTS_BEGIN,
    FETCH_DISCOUNTS_SUCCESS,
    ADD_FOOD_CATEGORY,
    ADD_TIME_SLOT,
    HANDLE_SEARCH_BUTTON_CLICK
}
    from '../actions/index';

const initialState = {
    discounts: [],
    foodCategory: null,
    timeSlot: null,
    loading: false,
    error: null
}

export default function discountReducer(state=initialState, action){
    switch (action.type) {
        
        case FETCH_DISCOUNTS_BEGIN:{
            
            return {
                ...state,
                loading: true,
                error: null
            };
        }
            
        case FETCH_DISCOUNTS_SUCCESS: {
            return {
                ...state,
                discounts: action.payload,
                error: null,
                loading: null
            };
        }
            
        case FETCH_DISCOUNTS_FAIL:
            {
                return{
                    ...state,
                    loading: false,
                    error: action.payload,
                    discounts: []
                };
            } 
        
        case ADD_FOOD_CATEGORY:
            {
                return {
                    ...state,
                    foodCategory: action.payload
                };
            }

        case ADD_TIME_SLOT:
            {
                return {
                    ...state,
                    timeSlot: action.payload
                }
            }
        case HANDLE_SEARCH_BUTTON_CLICK: 
        {   const {foodCategory, timeSlot} = action.payload;
        
        console.log(`${foodCategory}- ${timeSlot}`);
            return {
                ...state,
                foodCategory,
                timeSlot
            }
        }
            
        default: {
            return state;
        }
            
    }
}
