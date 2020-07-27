import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  }
  return (
    <ProSidebar breakPoint="md">
      <Menu iconShape="square" popperArrow>
        <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FavoriteIcon />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Dashboard;
