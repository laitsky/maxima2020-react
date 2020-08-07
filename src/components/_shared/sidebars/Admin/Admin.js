import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const Admin = ({ toggled, handleToggleSidebar }) => {
  const [collapsed] = useState(false);

  return (
    <>
      <ProSidebar
        breakPoint="lg"
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
            Laman Admin - MAXIMA 2020
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle" popperArrow>
            <MenuItem icon={<DashboardIcon />}>
              Dashboard
              <Link to="/admin" />
            </MenuItem>
            <MenuItem icon={<AddIcon />}>
              Tambah Akun
              <Link to="/admin/tambah-akun" />
            </MenuItem>
            <SubMenu title="STATE" icon={<DirectionsWalkIcon />}>
              <MenuItem>
                Tambah STATE
                <Link to="/admin/tambah-state" />
              </MenuItem>
              <MenuItem>
                Daftar STATE
                <Link to="/admin/state-lists" />
              </MenuItem>
            </SubMenu>
            <SubMenu title="HoME" icon={<HomeIcon />}>
              <MenuItem>
                Tambah Data HoME
                <Link to="/admin/add-home" />
              </MenuItem>
              <MenuItem>
                Tambah Media HoME
                <Link to="/admin/add-home-media" />
              </MenuItem>
            </SubMenu>
            <SubMenu title="Shortener" icon={<LanguageIcon />}>
              <MenuItem>Shortener Lists</MenuItem>
              <Link to="/admin/shorteners" />
            </SubMenu>
            <MenuItem icon={<ExitToAppIcon />}>
              Keluar
              <Link to="/logout" />
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </>
  );
};

export default Admin;
