import { YT_KEY } from '../config/keys';

export async function fetchData(max, query){
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${max}&q=${query}&key=${YT_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}