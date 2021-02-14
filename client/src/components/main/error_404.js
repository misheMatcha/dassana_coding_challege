import React from 'react';
import { Grid, Image, Item } from 'semantic-ui-react';

const Error404 = () => {
  const display404 = () => {
    // potential logic
      // gives user option to choose to view page with static data if api reaches quota cap
      // add to param for a toggle?
        // ex: video/t/:id
        //     results/f/:query
    return <Item.Group>
      {/* <img src='/images/YouTube-error.png' /> */}
      {/* <Image src='/images/YouTube-error.png' size='medium' /> */}
      <Image src='/images/youtube_error.svg' />
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
