// const YT_KEY = require('../config/keys_dev').YT_API_KEY;

export async function fetchSearchResults(max, query){
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${process.env.REACT_APP_YT_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchRelatedVideos(max, id){
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${max}&key=${process.env.REACT_APP_YT_KEY}`;
  const response = await fetch(url);
  if(!response.ok){
    throw Error(response.statusText);
  }else{
    const data = await response.json();
    return data;
  }
}

export async function fetchVideo(id){
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics%2C%20player&id=${id}&key=${process.env.REACT_APP_YT_KEY}`;
  const response = await fetch(url);
  if(!response.ok){
    throw Error(response.statusText);
  }else{
    const data = await response.json();
    return data;
  }
}