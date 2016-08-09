import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import YouTube from 'react-youtube';
import * as actions from '../actions/YTStreamActions';

export const StaticStream = (props) => {
  // Connects to a given video, plays, connecting to events; destroyed on end

  const {
    YTStream, 
    actions,
    videoID,
    _onReady,
    _onEnd,
    _onError
  } = props;
  const opts = {
    height: '720',
    width: '1280',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      autohide: 1,
      controls: 0
    }
  };

  return (
    <div>
    STATIC
    <YouTube
      videoId={videoID}
      opts={opts}
      onReady={_onReady}
      onEnd={_onEnd}
      onError={_onError}
    />
    </div>
  );
};

StaticStream.propTypes = {
  videoID: PropTypes.string.isRequired,
  _onEnd: PropTypes.func.isRequired,
  _onError: PropTypes.func.isRequired,
  _onReady: PropTypes.func.isRequired
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
)(StaticStream);
