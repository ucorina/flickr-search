import {
  FETCH_SEARCH_LOADING,
  FETCH_MORE_RESULTS_LOADING,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "../constants/search";

const initialState = {
  text: "",
  result: {
    photos: [],
    lastPageLoaded: 0,
    totalPages: 0
  },
  isLoading: false,
  errorMessage: null
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_LOADING:
      return {
        ...initialState,
        text: action.text,
        isLoading: true
      };
    case FETCH_MORE_RESULTS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        result: {
          photos: [...state.result.photos, ...action.result.photos.photo],
          lastPageLoaded: action.result.photos.page,
          totalPages: action.result.photos.total
        },
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
