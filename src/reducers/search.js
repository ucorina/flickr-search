import {
  FETCH_SEARCH_LOADING,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "../constants/search";

const initialState = {
  text: "",
  photos: [],
  isLoading: false,
  errorMessage: null
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_LOADING:
      return {
        ...state,
        photos: [],
        isLoading: true,
        errorMessage: null
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        photos: action.result.photos.photo,
        isLoading: false
      };
    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default search;
