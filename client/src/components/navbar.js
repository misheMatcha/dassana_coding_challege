import React, { useEffect, useState } from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { Input, Menu, Icon } from 'semantic-ui-react'

const Navbar = props => {
  const [query, setQuery] = useState('');

  const handleInput = (event) => {
    setQuery(event.target.value)
  };

  const submitSearch = () => {
    props.history.push(`/results/${query}`);
  };

  return <Menu className='navbar'>
    <Menu.Item position='left'>
      <Icon name='sidebar' />
      <Link to='/'>
        <Icon name='youtube play'/>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Input onChange={event => handleInput(event)} action={{ icon: 'search', onClick: () => submitSearch() }} placeholder='Search' />
      <Icon name='microphone' />
    </Menu.Item>
    <Menu.Item position='right'>
      <Icon name='video camera' />
      <Icon name='grid layout' />
      <Icon name='bell' />
    </Menu.Item>
  </Menu>
};

export default withRouter(Navbar);