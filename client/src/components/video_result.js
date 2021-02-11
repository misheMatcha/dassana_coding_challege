import React, { useEffect, useState } from 'react';
import { Grid, Image, Item } from 'semantic-ui-react';
import { loading } from '../util/general_util';

const VideoResult = props => {
  const [video, setVideo] = useState(props.video);

  useEffect(() => {
    // console.log(video)
    console.log(video.snippet.thumbnails)
  })

  const displayResultVideo = (
    <Grid.Column>
      
      {/* <Image src={video.snippet.thumbnails.default.url} /> */}
    </Grid.Column>
  );
  
  return video ? displayResultVideo : loading;
};

export default VideoResult;