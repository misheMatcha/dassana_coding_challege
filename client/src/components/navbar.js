import React, { useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { Input, Menu, Icon, Item, Sticky, Grid } from 'semantic-ui-react'

const Navbar = props => {
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value)
  };

  const submitSearch = () => {
    props.history.push(`/results/${query}`);
    // add page title change after push for results later
  };
  
  return <Sticky>
    <Grid className='navbar' centered columns='equal' padded>
      <Grid.Column className='navbar-sidebar' verticalAlign='middle'>
        <Icon name='sidebar' />
        <Link to='/'>
          <Icon name='youtube play'/> <span className='nav-title'>YouTube</span>
        </Link>
      </Grid.Column>
      <Grid.Column width={7}>
        <Input className='navbar-searchbar' onChange={event => handleInput(event)}
          action={{ icon: 'search', onClick: () => submitSearch() }}
          placeholder='Search' fluid />
      </Grid.Column>
      <Grid.Column className='navbar-mic' width={1} verticalAlign='middle'>
        <Icon name='microphone' />
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
        <Icon name='video camera' />
        <Icon name='grid layout' />
        <Icon name='bell' />
      </Grid.Column>
    </Grid>
  </Sticky>
};

export default withRouter(Navbar);