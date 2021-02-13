import React, { useEffect, useState } from 'react';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

const MenuSidebar = props => {
  useEffect(() => {
  },[])
  const displaySidebar = () => {
    return <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={props.toggle}
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='gamepad' />
        Games
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Channels
      </Menu.Item>
    </Sidebar>
  };

  return displaySidebar();
};

export default MenuSidebar;