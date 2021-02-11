import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Divider, Embed, Grid, Icon, Item, Image } from 'semantic-ui-react';
import { fetchVideo } from '../util/api_util';
import { convertPublishDateFormat, loading, timeSincePublished } from '../util/general_util';
import { RELATED_VIDEOS } from '../util/related_results';
import { VIDEO_RESULT } from '../util/video_result';

const VideoShow = props => {
  const videoId = props.history.location.pathname;
  // const [videoData, setVideoData] = useState(null);
  const [videoData, setVideoData] = useState(VIDEO_RESULT);
  // const [relatedVideos, setRelatedVideos] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(RELATED_VIDEOS);

  useEffect(() => {
    // if(videoData) fetchVideo(videoId.slice(7)).then(data => setVideoData(data.items[0]))
  }, [])

  // refactor results and related videos to a single component later
  const displayRelatedVideos = (
    <Grid.Column width={5} className='related-videos'>
      {
        relatedVideos.map(related => {
          if(related.snippet){
            return <Grid.Row className='related-container display-flex' key={related.id.videoId}>
              <Image spaced='right' src={related.snippet.thumbnails.default.url} />
              <Grid.Column className='related-details' >
                <Item.Header>{related.snippet.title}</Item.Header>
                <Item.Description>
                  {related.snippet.channelTitle}
                  <Item>
                    {timeSincePublished(related.snippet.publishedAt)}
                  </Item>
                </Item.Description>
              </Grid.Column>
            </Grid.Row>
          }
        })
      }
    </Grid.Column>
  );
  
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
              <Item.Group>
                <Item.Content>
                  {videoData.statistics.viewCount} views • {convertPublishDateFormat(videoData.snippet.publishedAt)}
                </Item.Content>
                <Item.Content>
                  <Icon name='thumbs up' /> {videoData.statistics.likeCount}
                  <Icon name='thumbs down' /> {videoData.statistics.dislikeCount}
                  <Icon name='share' />
                  <Icon name='add' />
                  <Icon name='ellipsis horizontal' />
                </Item.Content>
              </Item.Group>
              <Divider />
                <Item.Group>
                  {/* use thumbnail as placeholder - no auth for channel api */}
                  <Image src={videoData.snippet.thumbnails.default.url} avatar />
                  <Item>
                    {videoData.snippet.channelTitle}
                  </Item>
                </Item.Group>
                <Item className='display-linebreak'>
                  {/* add overlay to 'show more' later */}
                  {videoData.snippet.description}
                </Item>
              <Divider />
            </Item.Group>
        </Grid.Column>
        {displayRelatedVideos}
      </Grid.Row>
    </Grid>
  );

  return videoData ? displayVideo : loading;
};

export default withRouter(VideoShow);