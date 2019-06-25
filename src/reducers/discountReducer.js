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
} from "../actions/index";

const initialState = {
  discounts: [],
  foodCategory: "",
  timeSlot: "",
  search: "",
  loading: false,
  error: null,
  favorites: []
};

export default function discountReducer(state = initialState, action) {

  switch (action.type) {
    case FETCH_DISCOUNTS_BEGIN: {
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

    case FETCH_DISCOUNTS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        discounts: []
      };
    }

    case SELECT_FOOD_CATEGORY: {
      return {
        ...state,
        foodCategory: action.payload
      };
    }

    case SELECT_TIME_SLOT: {
      return {
        ...state,
        timeSlot: action.payload
      };
    }
    case HANDLE_SEARCH_BUTTON_CLICK: {
      const { foodCategory, timeSlot, search } = action.payload;

      return {
        ...state,
        foodCategory,
        timeSlot,
        search
      };
    }

    case ADDED_TO_LIKES: {
      const discountId = action.payload;
      const likedElem = state.discounts.find(discount =>  discount.id === discountId);
      const checkId = state.favorites.find(discount => discount.id === likedElem.id);
      if (!checkId){
        return {
          ...state,
          favorites: [...state.favorites, likedElem]
        }
      }
      return state;
    }
    
       case DELETE_FROM_LIKES: {
         const discountId = action.payload;
         const idx = state.favorites.findIndex((like) => like.id === discountId);
         const newFavs = [...state.favorites.slice(0, idx), ...state.favorites.slice(idx+1)];
         return { ...state, favorites: newFavs };
       }
       case FETCH_LIKES_SUCCESS: {
        return {
          ...state,
          favorites: action.payload
        }
       }
    default: {
      return state;
    }
  }
}
