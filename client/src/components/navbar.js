import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { Input, Menu, Icon, Item, Sticky, Grid, Radio, Label, Button } from 'semantic-ui-react'

// context
import { ApiToggleContext } from './main/api_toggle_context';

const Navbar = props => {
  const [query, setQuery] = useState('');
  const { toggleApi, setToggleApi } = useContext(ApiToggleContext);
  
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
        <Icon name='sidebar' onClick={() => props.onChange()} />
        <Link to='/' className='nav-title'>
          <Icon name='youtube play' />
          <span>YouTube</span>
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
      {/* <Grid.Column className='navbar-options'> */}
        <Button content={toggleApi ? 'API On' : 'API Off'} onClick={() => setToggleApi(!toggleApi)} />
        <Icon name='grid layout' />
        <Icon name='ellipsis vertical' />
      </Grid.Column>
    </Grid>
  </Sticky>
};

export default withRouter(Navbar);