import React, { useEffect, useState } from 'react';
import { fetchData } from '../util/api_util';

const Home = () => {
  const [videoList, setVideoList] = useState(null);
  
  useEffect(() => {
    // limit results to 25 due to daily limitations on get requests
    // hard code query as its the home page
    // and pull items only as it's the array we need
    fetchData(25, 'genshin lo-fi').then(data => setVideoList(data.items));
  }, []);

  const displayVideos = () => {
    return <ul>
      {
        videoList.map(video => {
          return <li key={video.id.videoId}>
            <p>{video.snippet.title}</p>
          </li>
        })
      }
    </ul>
  };

  return videoList ? displayVideos() : <p>loading...</p>;
};

export default Home;