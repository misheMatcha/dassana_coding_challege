import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Grid, Icon, Item, Image } from 'semantic-ui-react';

// util
import { fetchSearchResults } from '../../util/api_util';
import { loading, timeSincePublished } from '../../util/general_util';
import { SEARCH_RESULTS } from '../../util/search_results';

// context
import { ApiToggleContext } from './api_toggle_context';

const Results = props => {
  const query = props.history.location.pathname;
  const { toggleApi } = useContext(ApiToggleContext);
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    if(toggleApi){
      fetchSearchResults(10 ,query.slice(9))
        .then(data => setSearchResults(data.items))
        .catch(err => props.history.push('/404'))
    }else{
        setSearchResults(SEARCH_RESULTS);
      }
  }, [toggleApi]);

  const displayResults = () => {
    return <Grid className='search-results' centered padded>
      {
        // to be added - overlay with buttons for add to queue, add to watch later, and report
        // display on hover
         searchResults.map((result, idx) => {
          return <Grid.Row key={idx}>
            <Grid.Column className='result-thumbnail' as={Link} to={`/video/${result.id.videoId}`} width={3} verticalAlign='middle'>
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

  const testingFetchTimeout = () => {
    return <div>
      testing
    </div>
  }

  return searchResults ? displayResults() : loading;
  // return searchResults ? testingFetchTimeout() : loading;
};

export default withRouter(Results);