import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/YTStreamActions';
import Stream from './Stream';

export const StreamPage = (props) => {
  return (
    <Stream />
  );
};

StreamPage.propTypes = {
  actions: PropTypes.object.isRequired,
  YTStream: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    YTStream: state.YTStream
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamPage);