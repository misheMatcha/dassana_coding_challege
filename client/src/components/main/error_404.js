import React from 'react';
import { Grid, Item } from 'semantic-ui-react';

const Error404 = () => {
  const display404 = () => {
    // potential logic
      // gives user option to choose to view page with static data if api reaches quota cap
      // add to param for a toggle?
        // ex: video/t/:id
        //     results/f/:query
    return <Item.Group>
      <Item>
        This page isn't available due to YouTube API quota limits. Sorry about that.
      </Item>
      <Item>
        Want to see the page using static data? Click here.
      </Item>
      <Item>
        Otherwise click here to head home.
      </Item>
    </Item.Group>
  };

  return display404();
};

export default Error404;
