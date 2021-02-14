import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Divider, Embed, Grid, Icon, Item, Image, Button } from 'semantic-ui-react';

// util
import { fetchRelatedVideos, fetchVideo } from '../../util/api_util';
import { addCommaToNumber, convertPublishDateFormat, loading, timeSincePublished } from '../../util/general_util';
import { RELATED_VIDEOS } from '../../util/related_results';
import { VIDEO_RESULT } from '../../util/video_result';

// context
import { ApiToggleContext } from './api_toggle_context';

const VideoShow = props => {
  const videoId = props.history.location.pathname;
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { toggleApi } = useContext(ApiToggleContext);

  useEffect(() => {
    if(toggleApi){
      fetchVideo(videoId.slice(7))
        .then(data => setVideoData(data.items[0]))
        .catch(err => props.history.push('/404'))
      fetchRelatedVideos(6, videoId.slice(7))
        .then(data => setRelatedVideos(data.items))
        .catch(err => props.history.push('/404'))
    }else{
      setVideoData(VIDEO_RESULT);
      setRelatedVideos(RELATED_VIDEOS);
    }
    console.log(videoData)
  }, [])

  // refactor results and related videos to a single component later
  const displayRelatedVideos = () => {
    return <Grid.Column width={5} className='related-videos'>
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
  };

  const displayVideo = () => {
    return <Grid className='video-show' centered padded>
      <Grid.Row>
        <Grid.Column width={10}>
          <Embed
            id={videoData.id}
            placeholder={videoData.snippet.thumbnails.default.url}
            source='youtube' />
            <Item.Group>
              <Item.Header className='video-show-title'>
                {videoData.snippet.title}
              </Item.Header>
              <Item.Group className='display-flex space-between'>
                <Item.Content>
                  {addCommaToNumber(videoData.statistics.viewCount)} views • {convertPublishDateFormat(videoData.snippet.publishedAt)}
                </Item.Content>
                <Item.Content className='video-show-actions display-flex'>
                  <Item className='nowrap show-actions-icons'>
                    <Icon name='thumbs up' /> {videoData.statistics.likeCount}
                  </Item>
                  <Item className='nowrap show-actions-icons'>
                    <Icon name='thumbs down' /> {videoData.statistics.dislikeCount}
                  </Item>
                  <Item className='show-actions-icons'>
                    <Icon name='share' />
                  </Item>
                  <Item className='show-actions-icons'>
                    <Icon name='add' />
                  </Item>
                  <Item className='show-actions-icons'>
                    <Icon name='ellipsis horizontal' />
                  </Item>
                </Item.Content>
              </Item.Group>
              <Divider />
              <Item.Group className='video-channel-info display-flex space-between'>
                <Item.Group className='display-flex align-center'>
                  {/* use thumbnail as placeholder - no auth for channel api */}
                  <Image src={videoData.snippet.thumbnails.default.url} avatar />
                  <Item>
                    {videoData.snippet.channelTitle}
                  </Item>
                </Item.Group>
                <Item.Group className='video-channel-sub display-flex align-center'>
                  <Button className='video-join' content='JOIN' />
                  <Button className='video-subscribe' content='SUBSCRIBE' />
                  <Icon name='bell outline' />
                </Item.Group>
              </Item.Group>
                {/* add later - need to overlay and toogle for show more/less */}
                {/* <Item className='display-linebreak'>
                  {videoData.snippet.description}
                </Item> */}
              <Divider />
            </Item.Group>
        </Grid.Column>
        {displayRelatedVideos()}
      </Grid.Row>
    </Grid>
  };

  return videoData && relatedVideos ? displayVideo() : loading;
};

export default withRouter(VideoShow);