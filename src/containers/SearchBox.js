import { connect } from "react-redux";
import { searchFlickrImages } from "../actions/search";
import SearchBox from "../components/SearchBox";

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  errorMessage: state.search.errorMessage
});

const mapDispatchToProps = dispatch => ({
  onSearch: text => dispatch(searchFlickrImages(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
