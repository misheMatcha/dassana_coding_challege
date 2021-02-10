import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Divider, Embed, Grid, Item } from 'semantic-ui-react';
import { fetchVideo } from '../util/api_util';
import { convertPublishDateFormat, loading } from '../util/general_util';
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
      <Grid.Row>
        <Grid.Column width={10}>
          <Embed
            id={videoData.id}
            placeholder={videoData.snippet.thumbnails.standard.url}
            source='youtube' />
            <Item.Group>
              <Item.Header>
                {videoData.snippet.title}
              </Item.Header>
              <Item.Content>
                {videoData.statistics.viewCount} views • {convertPublishDateFormat(videoData.snippet.publishedAt)}
              </Item.Content>
              <Divider />
              desc
              <Divider />
            </Item.Group>
        </Grid.Column>
        <Grid.Column>
          related
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

  return videoData ? displayVideo : loading;
};

export default withRouter(VideoShow);