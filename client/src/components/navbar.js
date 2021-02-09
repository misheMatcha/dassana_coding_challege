import React from 'react';
import { Input, Menu, Header, Icon } from 'semantic-ui-react'

const Navbar = () => {
  return <Menu attached='top'>
    <Menu.Item>
      <Icon name='sidebar' />
      <Icon name='youtube play' />
    </Menu.Item>
    <Menu.Item>
      <Input className='icon' icon='search' placeholder='search...' />
      <Icon name='microphone' />
    </Menu.Item>
    <Menu.Item>
      <Icon name='video camera' />
      <Icon name='grid layout' />
      <Icon name='bell' />
    </Menu.Item>
  </Menu>
};

export default Navbar;