import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import YouTube from 'react-youtube';
import _ from 'underscore';

import * as actions from '../actions/YTStreamActions';

import {LiveStream} from './LiveStream';
import {StaticStream} from './StaticStream';

import '../styles/stream.scss';


export const Stream = (props) => {
  // Controls Stream and Polls for new videos
  const {YTStream, actions} = props;
  let interval;
   
  const onChange = (state) => {
    //this.setState(state);
  };

  const _onReady = (event) => {
    console.log('YT: static video ready', event);
    //event.target.playVideo();
  };
  const _onEnd = (event) => {
    console.log('YT: static video ended', event);
    //this.setState({YTStream:{ playingHD: true}});
  };
  const _onError = (event) => {
    console.log('YT: video error', event);
    //event.target.pauseVideo();
  };

  const getVideoList = channelID => {
    return new Promise(function(resolve, reject) {
      // replace with react ajax
      // $.ajax({
      //   url: 'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=' + channelID + '&key=AIzaSyBL4GmKkmmHHjinhfYlrxGl_JgRM2KA3iA',
      //   cache: false
      // })
      //   .fail(()=>{
      //     reject(Error("It broke"));
      // })
      //   .done((res)=>{
          resolve();
      // });
    });
  };

  const pollVideos = () => {
    getVideoList('UCNSUeRB4hUoCYlnTubLO84A')
      .then(function(response) {
        console.log("Loaded video list successfully", response);
        let videoIndex = this.YTStream.videoIndex;
        let videoIds = _.map(response.items, (e,i) => {
          return e.id.videoId;
        });
        
        // play latest video if new
        if(_.contains(videoIndex, videoIds[0])){
          //playVideo(videoIds[0]);
        }
        
        // make sure old videos are marked and not played
        _.each(videoIds, (e, i) =>{
          if(!_.contains(videoIndex, e)){
            videoIndex.push(e);
          }
        });
        this.setState({videoIndex: videoIndex});
      }, function(error) {
        console.error("Failed loading video list", error);
      });
  };

  let currentStream;
  // if first load, try to play HD
  console.log('!',YTStream.index);
  if(YTStream.index.length == 0) {
    console.log('first load; starting poll');
    this.setState({index:'asd'});
    pollVideos();
    //interval = setInterval(pollVideos, 60000*10); // change to setInterval
  }



  if(YTStream.playingHD){

    // start polling for new video
    
      currentStream = <StaticStream _onEnd={_onEnd} _onError={_onError} _onReady={_onReady} videoID={'2g811Eo7K8U'} />;
  } else {
    // immediately try to load stream
      currentStream = <LiveStream _onError={_onError} />;
  }
  
  return (
    <div>
      {currentStream}
    </div>
  );

};

Stream.propTypes = {
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
)(Stream);
