import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';

export const LiveStream = (props) => {
  return (<div></div>);
};

LiveStream.propTypes = {
  actions: PropTypes.object.isRequired,
  ytStream: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    ytStream: state.ytStream
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
)(LiveStream);
