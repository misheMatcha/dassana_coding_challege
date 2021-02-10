import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Embed, Grid } from 'semantic-ui-react';
import { fetchVideo } from '../util/api_util';
import { loading } from '../util/general_util';
import { VIDEO_RESULT } from '../util/video_result';

const VideoShow = props => {
  const videoId = props.history.location.pathname;
  // const [videoData, setVideoData] = useState(null);
  const [videoData, setVideoData] = useState(VIDEO_RESULT);

  useEffect(() => {
    // if(videoData) fetchVideo(videoId.slice(7)).then(data => setVideoData(data.items[0]))
    console.log(videoData)
  }, [])
  
  const displayVideo = (
    <Grid className='video-show' centered padded>
      test
    </Grid>
  );

  return videoData ? displayVideo : loading;
};

export default withRouter(VideoShow);