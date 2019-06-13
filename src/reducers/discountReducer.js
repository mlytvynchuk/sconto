import {
    FETCH_DISCOUNTS_FAIL,
    FETCH_DISCOUNTS_BEGIN,
    FETCH_DISCOUNTS_SUCCESS}
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
            break;
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
        default: {
            return state;
        }
            
    }
}
