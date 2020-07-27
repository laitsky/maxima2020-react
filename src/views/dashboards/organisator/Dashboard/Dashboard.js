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
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <ProSidebar
        breakPoint="md"
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
      >
        <Menu iconShape="square" popperArrow>
          <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
          <SubMenu title="Components" icon={<FavoriteIcon />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      <button type="button" onClick={() => handleToggleSidebar(true)}>
        test
      </button>
    </>
  );
};

export default Dashboard;
