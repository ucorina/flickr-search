import {
  FETCH_SEARCH_LOADING,
  FETCH_SEARCH_SUCCESS,
  FETCH_MORE_RESULTS_LOADING
} from "../constants/search";
import { searchFlickrImages, loadMorePhotos } from "./search";
import { MOCK_PHOTOS_RESULT } from "../test/mockData";
import mockStore from "../test/mockStore";

jest.mock("../flickrApi", () => ({
  searchImages: jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(MOCK_PHOTOS_RESULT);
      }, 100);
    });
  })
}));

describe("search actions", () => {
  it("searches Flickr images", () => {
    const expectedActions = [
      { type: FETCH_SEARCH_LOADING },
      { type: FETCH_SEARCH_SUCCESS, result: MOCK_PHOTOS_RESULT }
    ];
    const store = mockStore({});

    return store.dispatch(searchFlickrImages("bikes", 2)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("loads more photos", () => {
    const expectedActions = [
      { type: FETCH_SEARCH_LOADING },
      { type: FETCH_SEARCH_SUCCESS, result: MOCK_PHOTOS_RESULT },
      { type: FETCH_MORE_RESULTS_LOADING },
      { type: FETCH_SEARCH_SUCCESS, result: MOCK_PHOTOS_RESULT }
    ];
    const store = mockStore({});

    return store
      .dispatch(searchFlickrImages("bikes"))
      .then(() => store.dispatch(loadMorePhotos()))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
