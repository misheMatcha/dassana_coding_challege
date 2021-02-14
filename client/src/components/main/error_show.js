import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Image, Item } from 'semantic-ui-react';

const ErrorShow = props => {
  const param = props.history.location.pathname;

  const message404 = (
    <Item className='error-page-text display-flex'>
      This page isn't available due to YouTube API quota limits. Sorry about that. <br />
      To view this site using static data, use the API On/Off button in the navigation. <br />
      <Link to='/'>Click here to head home.</Link>
    </Item>
  );

  const messageNotFound = (
    <Item className='error-page-text display-flex'>
      Sorry this page doesn't exist. <br />
      <Link to='/'>Click here to head home.</Link>
    </Item>
  );

  const displayError = () => {
    return <Item.Group className='error-page display-flex'>
      <Image src='/images/youtube_error.svg' />
      {
        param.slice(1) === '404' ? message404 : messageNotFound
      }
    </Item.Group>
  };

  return displayError();
};

export default withRouter(ErrorShow);
