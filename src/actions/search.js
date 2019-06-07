import {
  FETCH_SEARCH_LOADING,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_ERROR
} from "../constants/search";
import * as flickrApi from "../flickrApi";

export function searchFlickrImages(text) {
  return function(dispatch) {
    dispatch({ type: FETCH_SEARCH_LOADING });
    flickrApi
      .searchImages(text)
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
}
