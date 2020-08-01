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

const Organisator = () => {
  const [collapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => handleToggleSidebar(true)}
        style={{ position: 'absolute', marginLeft: '2em' }}
      >
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
            Laman Organisator - MAXIMA 2020
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle" popperArrow>
            <MenuItem
              icon={<DashboardIcon />}
              style={{ color: 'white' }}
            >
              Dashboard
            </MenuItem>
            <SubMenu
              title="Components"
              icon={<FavoriteIcon />}
              style={{ color: 'white' }}
            >
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

export default Organisator;
