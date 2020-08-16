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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const Acara = ({ toggled, handleToggleSidebar }) => {
  const [collapsed] = useState(false);
  return (
    <>
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
              Laman acara - MAXIMA 2020
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle" popperArrow>
              <MenuItem icon={<DashboardIcon />}>
                Dashboard
                <Link to="/acara" />
              </MenuItem>
              <SubMenu title="STATE" icon={<DirectionsWalkIcon />}>
                <MenuItem>
                  Tambah STATE
                  <Link to="/acara/tambah-state" />
                </MenuItem>
                <MenuItem>
                  Daftar Kegiatan STATE
                  <Link to="/acara/state-lists" />
                </MenuItem>
                <MenuItem>
                  Daftar Akun Organisator STATE
                  <Link to="/acara/akun-organisator-lists" />
                </MenuItem>
                <MenuItem>
                  Daftar PIC Organisator
                  <Link to="/acara/pic-organisator" />
                </MenuItem>
              </SubMenu>
              <SubMenu title="HoME" icon={<HomeIcon />}>
                <MenuItem>
                  Tambah Data HoME
                  <Link to="/acara/add-home" />
                </MenuItem>
                <MenuItem>
                  Tambah Media HoME
                  <Link to="/acara/add-home-media" />
                </MenuItem>
                <MenuItem>
                  Daftar Organisator HoME
                  <Link to="/acara/home-lists" />
                </MenuItem>
              </SubMenu>
              <MenuItem icon={<ExitToAppIcon />}>
                Keluar
                <Link to="/logout" />
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </>
    </>
  );
};

export default Acara;
