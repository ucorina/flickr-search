import React from "react";
import { connect } from "react-redux";
import { loadMorePhotos } from "../actions/search";

const LoadMoreButton = ({ hasMorePages, isLoading, onLoadMore }) => {
  if (isLoading) {
    return <div>Loading more photos ...</div>;
  }
  if (hasMorePages) {
    return (
      <div>
        <button onClick={() => onLoadMore()}>Load more</button>
      </div>
    );
  }

  return null;
};

const canLoadMorePhotos = search =>
  search.result.lastPageLoaded > 0 &&
  search.result.lastPageLoaded !== search.result.totalPages;

const isLoadingMorePages = search =>
  search.isLoading && search.result.lastPageLoaded > 0;

const mapStateToProps = state => ({
  hasMorePages: canLoadMorePhotos(state.search),
  isLoading: isLoadingMorePages(state.search)
});

const mapDispatchToProps = dispatch => ({
  onLoadMore: () => dispatch(loadMorePhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMoreButton);
