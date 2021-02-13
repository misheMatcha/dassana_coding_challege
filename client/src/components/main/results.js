import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Grid, Icon, Item, Image } from 'semantic-ui-react';
import { fetchSearchResults } from '../../util/api_util';
import { loading, timeSincePublished } from '../../util/general_util';
import { SEARCH_RESULTS } from '../../util/search_results';

const Results = props => {
  const query = props.history.location.pathname;
  const [searchResults, setSearchResults] = useState(null);
  // const [searchResults, setSearchResults] = useState(SEARCH_RESULTS);

  useEffect(() => {
    fetchSearchResults(1 ,query.slice(9)).then(data => setSearchResults(data.items))
  }, []);

  const displayResults = () => {
    return <Grid className='search-results' centered padded>
      {
        // to be added - overlay with buttons for add to queue, add to watch later, and report
        // display on hover
        // look into why isn't loading initially
        // !searchResults ? 'loading' :
         searchResults.map(result => {
          return <Grid.Row key={result.id.videoId}>
            <Grid.Column className='result-thumbnail' as={Link} to={`/video/${result.id.videoId}`} width={3} verticalAlign='middle'>
              {/* <Item.Image size='medium' src={result.snippet.thumbnails.medium.url} /> */}
              <Image src={result.snippet.thumbnails.medium.url} />
            </Grid.Column>
            <Grid.Column className='result-details' as={Link} to={`/video/${result.id.videoId}`} width={8}>
              <Item.Group>
                <Item.Header className='result-details-header'>
                {result.snippet.title}
                </Item.Header>
                <Item.Description className='result-details-stats'>
                {/* to be added - view count */}
                {timeSincePublished(result.snippet.publishTime)}
                </Item.Description>

                <Item.Description className='result-details-channel'>
                {/* to be added - channel icon */}
                {result.snippet.channelTitle}
                </Item.Description>

                <Item.Description className='result-details-summary'>
                {result.snippet.description}
                </Item.Description>
              </Item.Group>
            </Grid.Column>
        </Grid.Row>
        })
      }
    </Grid>
  };

  return searchResults ? displayResults() : loading;
};

export default withRouter(Results);