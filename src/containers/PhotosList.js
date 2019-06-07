import { connect } from "react-redux";
import PhotosList from "../components/PhotosList";

const mapStateToProps = state => ({
  text: state.search.text,
  photos: state.search.result.photos
});

export default connect(
  mapStateToProps,
  null
)(PhotosList);
