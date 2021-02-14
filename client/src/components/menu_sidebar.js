import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sidebar, Icon, Divider, Item, Button, Grid, List } from 'semantic-ui-react';

const MenuSidebar = props => {
    const linkLists = {
      home: {
        nameList: ['Home', 'Trending', 'Subscriptions'],
        iconList: ['home', 'fire', 'th list']
      },
      user: {
        nameList: ['Library', 'History'],
        iconList: ['clone', 'history']
      },
      bestOf: {
        nameList: ['Music', 'Sports', 'Gaming', 'Movies & Shows', 'News', 'Live', 'Fashion & Beauty', 'Learning', 'Spotlight', '360° Video'],
        iconList: ['music', 'trophy', 'gamepad', 'film', 'newspaper', 'wifi', 'pied piper hat', 'lightbulb', 'youtube play', 'find']
      },
      browse: {
        nameList: ['Browse channels'],
        iconList: ['add circle']
      },
      moreFrom: {
        nameList: ['YouTube Premium', 'Live'],
        iconList: ['youtube', 'wifi']
      },
      feedback: {
        nameList: ['Settings', 'Report history', 'Help', 'Send feedback'],
        iconList: ['setting', 'flag', 'help circle', 'comment']
      }
  }
  const footerList = {
    copyright: ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers'],
    terms: ['Terms', 'Privacy', 'Policy & Safety', 'How YouTube works', 'Test new features']
  };

  // should be running at O(1) because the longest list at most is 10~
  // need to verify
  // to add later - best of had rounded icons
  const displayLink = whichList => {
    return linkLists[whichList].nameList.map((name, idx) => {
      return <Menu.Item key={idx}
        as={Link} to='/'
        fitted
        >
          <Item.Content className='menu-sidebar-link'>
            <Icon name={linkLists[whichList].iconList[idx]} />
            <Item className='menu-sidebar-link-name'>{name}</Item>
          </Item.Content>
      </Menu.Item>
    });
  };

  const displayFooter = list => {
    return list.map((name, idx) => {
      return <Item key={idx} className='menu-sidebar-footer-link'>
        {name}
      </Item>
    });
  };

  const displaySidebar = () => {
    return <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={props.toggle}
      borderless
    >
      <Divider hidden />
      <Menu.Item fitted>
        <Item.Content className='menu-sidebar-nav display-flex'>
          <Icon name='sidebar' onClick={() => props.onChange()} />
          <Link to='/' className='menu-sidebar-home'>
            <Icon name='youtube play' />
            <span>YouTube</span>
          </Link>
        </Item.Content>
      </Menu.Item>
      <Divider />
      {displayLink('home')}
      <Divider />
      {displayLink('user')}
      <Divider />
      <Menu.Item fitted className='menu-sidebar-signin'>
        <Item className='menu-sidebar-signin-text'>Sign in to like videos, comment, and subscribe.</Item>
        <Button>
          <Icon name='user circle' /> SIGN IN
        </Button>
      </Menu.Item>
      <Divider />
      <Item.Header className='menu-sidebar-header'>BEST OF YOUTUBE</Item.Header>
      {displayLink('bestOf')}
      <Divider />
      {displayLink('browse')}
      <Divider />
      <Item.Header className='menu-sidebar-header'>MORE FROM YOUTUBE</Item.Header>
      {displayLink('moreFrom')}
      <Divider />
      {displayLink('feedback')}
      <Divider />
      <Item.Group className='menu-sidebar-footer'>
        {displayFooter(footerList.copyright)}
      </Item.Group>
      <Item.Group className='menu-sidebar-footer'>
        {displayFooter(footerList.terms)}
      </Item.Group>
      <Item className='sidebar-copyright'>© 2021 Google LLC</Item>
      <Divider hidden />
    </Sidebar>
  };

  return displaySidebar();
};

export default MenuSidebar;