import React, { useState } from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box, Container } from '@material-ui/core';

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
    <Box
      style={{ height: '100vh', display: 'flex' }}
    >
      <button type="button" onClick={() => handleToggleSidebar(true)} style={{ position: 'absolute', marginLeft: '2em' }}>
        Toggle
      </button>
      <ProSidebar
        breakPoint="md"
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              textAlign: 'center',
              overflow: 'hidden',
              color: 'white',
            }}
          >
            MAXIMA 2020 SIDEBAR
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square" popperArrow>
            <MenuItem icon={<DashboardIcon />} style={{ color: 'white' }}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FavoriteIcon />} style={{ color: 'white' }}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
      <Container 
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <h1 style={{ textAlign: 'center', marginTop: '1em' }}>AAAAAA</h1>
        <h4>BBBBBB</h4>
      </Container>
    </Box>
  );
};

export default Dashboard;
