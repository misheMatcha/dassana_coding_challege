import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sidebar, Icon, Divider, Item, Button } from 'semantic-ui-react';

const MenuSidebar = props => {
    const linkLists = {
      home: {
        nameList: ['Home', 'Trending', 'Subscriptions'],
        iconList: ['home', 'fire', 'th list']
      },
      user: {
        nameList: ['Library', 'History'],
        iconList: ['clone', 'undo alternate']
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
  const footerList = ['About', 'Press', 'Copyright', 'Contact us', 'Creators', 'Advertise', 'Developers'];

  // should be running at O(1) because the longest list at most is 10~
  // need to verify
  const displayLink = whichList => {
    return linkLists[whichList].nameList.map((name, idx) => {
      return <Menu.Item key={idx} as={Link} to='/' fitted>
        <Icon name={linkLists[whichList].iconList[idx]} />
        {name}
      </Menu.Item>
    });
  };

  const displayFooter = list => {
    return list.map((name, idx) => {
      return <Item key={idx}>
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
      // visible={props.toggle}
      visible
      borderless
    >
      <Divider hidden />
      <Menu.Item fitted>
        <Icon name='sidebar' /> YouTube
      </Menu.Item>
      <Divider />
      {displayLink('home')} 
      <Divider />
      {displayLink('user')} 
      <Divider />
      <Menu.Item fitted>
        <Item>Sign in to like videos, comment, and subscribe.</Item>
        <Button icon labelPosition='left'>
          <Icon name='youtube' /> SIGN IN
        </Button>
      </Menu.Item>
      <Divider />
      <Item.Header>BEST OF YOUTUBE</Item.Header>
      {displayLink('bestOf')} 
      <Divider />
      {displayLink('browse')} 
      <Divider />
      <Item.Header>MORE FROM YOUTUBE</Item.Header>
      {displayLink('moreFrom')} 
      <Divider />
      {displayLink('feedback')} 
      <Divider />
      <Item.Group>
        {displayFooter(footerList)}
      </Item.Group>
    </Sidebar>
  };

  return displaySidebar();
};

export default MenuSidebar;