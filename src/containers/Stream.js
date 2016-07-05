import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import YouTube from 'react-youtube';
import * as actions from '../actions/YTStreamActions';
import LiveStream from './LiveStream';

export const Stream = (props) => {
  // Controls Stream and Polls for new videos

  const {YTStream, actions} = props;

  return (
    <LiveStream />
  );
};

Stream.propTypes = {
  // YTStream: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  console.log(state);
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
)(Stream);
