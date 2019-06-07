import {
  FETCH_SEARCH_LOADING,
  FETCH_MORE_RESULTS_LOADING,
  FETCH_SEARCH_SUCCESS
} from "../constants/search";
import {
  MOCK_PHOTOS_RESULT,
  MOCK_PHOTOS_RESULT_PAGE_2,
  MOCK_PHOTOS_LIST,
  MOCK_PHOTOS_LIST_PAGE_2
} from "../test/mockData";

import search from "./search";

const getInitialState = () => search(undefined, {});
const startSearch = () =>
  search(getInitialState(), { type: FETCH_SEARCH_LOADING, text: "Amsterdam" });
const firstPageOfResultsRetrieved = () =>
  search(startSearch(), {
    type: FETCH_SEARCH_SUCCESS,
    result: MOCK_PHOTOS_RESULT
  });
const startLoadingMorePhotos = () =>
  search(firstPageOfResultsRetrieved(), { type: FETCH_MORE_RESULTS_LOADING });
const secondPageOfResultsRetrieved = () =>
  search(startLoadingMorePhotos(), {
    type: FETCH_SEARCH_SUCCESS,
    result: MOCK_PHOTOS_RESULT_PAGE_2
  });

describe("search reducer", () => {
  describe("initial state", () => {
    let state;

    beforeEach(() => {
      state = getInitialState();
    });

    it("starts with no search text", () => expect(state.text).toEqual(""));
    it("starts with no photos", () => expect(state.result.photos).toEqual([]));
    it("is not loading", () => expect(state.isLoading).toBe(false));
    it("starts with 0 pages loaded", () =>
      expect(state.result.lastPageLoaded).toEqual(0));
    it("starts with 0 page total count", () =>
      expect(state.result.totalPages).toEqual(0));
    it("starts with no error message", () =>
      expect(state.errorMessage).toEqual(null));
  });

  describe("fetching search results - initial search", () => {
    let state;

    beforeEach(() => {
      state = startSearch();
    });

    it("saves the search text", () => expect(state.text).toEqual("Amsterdam"));
    it("starts loading", () => expect(state.isLoading).toBe(true));
  });

  describe("search results retrieved - first page", () => {
    let state;

    beforeEach(() => {
      state = firstPageOfResultsRetrieved();
    });

    it("saves the search text", () => expect(state.text).toEqual("Amsterdam"));
    it("stops loading", () => expect(state.isLoading).toBe(false));
    it("contains the photos list", () =>
      expect(state.result.photos).toEqual(MOCK_PHOTOS_LIST));
    it("has the last page loaded to 1", () =>
      expect(state.result.lastPageLoaded).toEqual(1));
    it("has a pointer to the total pages available", () =>
      expect(state.result.totalPages).toEqual(MOCK_PHOTOS_RESULT.photos.total));
  });

  describe("fetching more images", () => {
    let state;

    beforeEach(() => {
      state = startLoadingMorePhotos();
    });

    it("saves the search text", () => expect(state.text).toEqual("Amsterdam"));
    it("stops loading", () => expect(state.isLoading).toBe(true));
    it("has the last page loaded to 1 since 2nd one is still being loaded", () =>
      expect(state.result.lastPageLoaded).toEqual(1));
    it("did not reset existing photos", () =>
      expect(state.result.photos).toEqual(MOCK_PHOTOS_LIST));
    it("has a pointer to the total pages available", () =>
      expect(state.result.totalPages).toEqual(MOCK_PHOTOS_RESULT.photos.total));
  });

  describe("retrieved 2nd page of photos", () => {
    let state;

    beforeEach(() => {
      state = secondPageOfResultsRetrieved();
    });

    it("saves the search text", () => expect(state.text).toEqual("Amsterdam"));
    it("stops loading", () => expect(state.isLoading).toBe(false));
    it("did not reset existing photos", () =>
      expect(state.result.photos).toEqual([
        ...MOCK_PHOTOS_LIST,
        ...MOCK_PHOTOS_LIST_PAGE_2
      ]));
    it("has the last page loaded 2", () =>
      expect(state.result.lastPageLoaded).toEqual(2));
    it("has a pointer to the total pages available", () =>
      expect(state.result.totalPages).toEqual(MOCK_PHOTOS_RESULT.photos.total));
  });
});
