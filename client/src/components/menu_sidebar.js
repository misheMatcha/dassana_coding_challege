import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Sidebar, Icon, Divider, Item, Button } from 'semantic-ui-react';

const MenuSidebar = props => {
  const displaySidebar = () => {
    return <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={props.toggle}
    >
      <Menu.Item>
        <Icon name='sidebar' onClick={() => props.onChange()} />
        YouTube
      </Menu.Item>
      <Menu.Item>
        <Item as={Link} to='/'>
          <Icon name='home' /> Home
        </Item>
        <Item>
          <Icon name='fire' /> Trending
        </Item>
        <Item>
          <Icon name='th list' /> Subscriptions
        </Item>
      </Menu.Item>
      <Menu.Item>
        <Item>
          <Icon name='clone' /> Library
        </Item>
        <Item>
          <Icon name='undo alternate' /> History
        </Item>
      </Menu.Item>
      <Menu.Item>
        <Item.Description>
          Sign in to like videos, comment, and subscribe.
        </Item.Description>
        <Button><Icon name='youtube' /> SIGN IN</Button>
      </Menu.Item>
      <Menu.Item>
        <Item.Header>
          BEST OF YOUTUBE
        </Item.Header>
        <Item>
          <Icon name='music' /> Music
          </Item>
        <Item>
          <Icon name='trophy' /> Sports
          </Item>
        <Item>
          <Icon name='gamepad' /> Gaming
          </Item>
        <Item>
          <Icon name='film' /> Movies & Shows
          </Item>
        <Item>
          <Icon name='newspaper' /> News
          </Item>
        <Item>
          <Icon name='wifi' /> Live
          </Item>
        <Item>
          <Icon name='pied piper hat' /> Fashion & Beauty
          </Item>
        <Item>
          <Icon name='lightbulb' /> Learning
          </Item>
        <Item>
          <Icon name='youtube play' /> Spotlight
          </Item>
        <Item>
          <Icon name='find' /> 360° Video
          </Item>
      </Menu.Item>
      <Menu.Item>
        <Icon name='add circle' /> Browse channels
      </Menu.Item>
      <Menu.Item>
        <Item.Header>
          MORE FROM YOUTUBE
        </Item.Header>
        <Item>
          <Icon name='youtube' /> YouTube Premium
        </Item>
        <Item>
          <Icon name='wifi' /> Live
        </Item>
      </Menu.Item>
      <Menu.Item>
        <Item>
          <Icon name='setting' /> Settings
        </Item>
        <Item>
          <Icon name='flag' /> Report history
        </Item>
        <Item>
          <Icon name='help circle' /> Help
        </Item>
        <Item>
          <Icon name='comment' /> Send feedback
        </Item>
      </Menu.Item>
      <Menu.Item>
        <Item>
          About
        </Item>
        <Item>
          Press
        </Item>
        <Item>
          Copyright
        </Item>
        <Item>
          Contact us
        </Item>
        <Item>
          Creators
        </Item>
        <Item>
          Advertise
        </Item>
        <Item>
          Developers
        </Item>
      </Menu.Item>
    </Sidebar>
  };

  return displaySidebar();
};

export default MenuSidebar;