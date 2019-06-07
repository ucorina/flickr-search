import {
  FETCH_SEARCH_LOADING,
  FETCH_MORE_RESULTS_LOADING,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "../constants/search";
import * as flickrApi from "../flickrApi";

const fetchImages = (text, page) => {
  return function(dispatch) {
    return flickrApi
      .searchImages(text, page)
      .then(result => {
        dispatch({ type: FETCH_SEARCH_SUCCESS, result });
      })
      .catch(error => {
        dispatch({
          type: FETCH_SEARCH_ERROR,
          errorMessage: error.message
        });
      });
  };
};

export function searchFlickrImages(text) {
  return function(dispatch) {
    dispatch({ type: FETCH_SEARCH_LOADING, text });
    return dispatch(fetchImages(text));
  };
}

export function loadMorePhotos() {
  return function(dispatch, getState) {
    const state = getState();

    dispatch({ type: FETCH_MORE_RESULTS_LOADING });

    return dispatch(fetchImages(state.text, state.pagesLoaded + 1));
  };
}
