import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { fetchData } from '../util/api_util';

const Home = () => {
  const [videoList, setVideoList] = useState(null);
  
  useEffect(() => {
    // limit results to 25 due to daily limitations on get requests
    // hard code query as its the home page
    // and pull items only as it's the array we need
    fetchData(5, 'lo-fi').then(data => setVideoList(data.items));
  }, []);

  const displayVideos = () => {
    return <ul>
      {
        videoList.map(video => {
          return <Item.Group as={Link} to={`/video/${video.id.videoId}`} key={video.id.videoId}>
            <Item>
              <Item.Image size='medium' src={video.snippet.thumbnails.medium.url} />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='a'>{video.snippet.title}</Item.Header>
                <Item.Description>
                  {video.snippet.channelTitle}
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        })
      }
    </ul>
  };

  return videoList ? displayVideos() : <p>loading...</p>;
};

export default Home;