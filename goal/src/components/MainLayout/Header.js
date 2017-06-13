import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import * as URLSource from '../../common/URLSource';

function Header({ location, usernickname }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="user" />{usernickname || 'xxx'}</Link>
      </Menu.Item>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key={URLSource.Projects}>
        <Link to={URLSource.Projects}><Icon type="appstore-o" />项目</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
