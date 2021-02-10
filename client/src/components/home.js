import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Grid, Item } from 'semantic-ui-react';
import { fetchData } from '../util/api_util';
import { loading, timeSincePublished } from '../util/general_util';
import { SEARCH_RESULTS } from '../util/search_results';

const Home = () => {
  // const [videoList, setVideoList] = useState(null);
  const [videoList, setVideoList] = useState(SEARCH_RESULTS);

  useEffect(() => {
    // limit results to 25 due to daily limitations on get requests
    // hard code query as its the home page
    // and pull items only as it's the array we need
    // fetchData(5, 'genshin lo-fi').then(data => setVideoList(data.items));
  }, []);

  const displayVideos = () => {
    return <Grid columns='equal' centered padded>
      {
        videoList.map(video => {
          return <Grid.Column className='home-video' width={3}>
            <Item as={Link} to={`/video/${video.id.videoId}`}>
              <Item.Image size='medium' src={video.snippet.thumbnails.medium.url} />
              <Item.Content verticalAlign='middle'>
                <Item.Header className='home-header'>{video.snippet.title}</Item.Header>
                <Item.Description className='home-desc'>
                  <span className='home-desc-channel'>{video.snippet.channelTitle}</span><br />
                  {/* need video api to pull subscriptions obj for view count */}
                  {/* to be added later */}
                  {/* {`view count`} {timeSincePublished(video.snippet.publishTime)} */}
                  {timeSincePublished(video.snippet.publishTime)}
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
        })
      }
    </Grid>
  };

  return videoList ? displayVideos() : loading;
};

export default withRouter(Home);