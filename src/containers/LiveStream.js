import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import YouTube from 'react-youtube';
import * as actions from '../actions/YTStreamActions';

export const LiveStream = (props) => {
  // Connects to a given stream (video)

  const {YTStream, actions} = props;
  const opts = {
    height: '720',
    width: '1280',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      autohide: 1,
      controls: 0
    }
  };

  const _onReady = (event) => {
    console.log('YT: video ready', event);
    //event.target.playVideo();
  };
  const _onEnd = (event) => {
    console.log('YT: video ended', event);
  };
  const _onError = (event) => {
    console.log('YT: video error', event);
    //event.target.pauseVideo();
  };

  return (
    <YouTube
      videoId={"2g811Eo7K8U"}
      opts={opts}
      onReady={_onReady}
      onEnd={_onEnd}
      onError={_onError}
    />
  );
};

LiveStream.propTypes = {
  YTStream: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
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
)(LiveStream);
