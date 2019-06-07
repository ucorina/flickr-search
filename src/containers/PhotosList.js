import { connect } from "react-redux";
import PhotosList from "../components/PhotosList";

const mapStateToProps = state => ({
  photos: state.search.photos
});

export default connect(
  mapStateToProps,
  null
)(PhotosList);
