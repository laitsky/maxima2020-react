import React from 'react';
import './MxmNavbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/mxm20_title_icon.png';

const Navbar = () => (
  <div>
    <nav className="menu-container">
      <input type="checkbox" aria-label="Toggle menu" />
      <span />
      <span />
      <span />

      <NavLink to="/" exact className="menu-logo">
        <img src={logo} alt="Malam Ekspresi Mahasiswa 2020" />
      </NavLink>

      <div className="menu">
        <ul>
          <li>
            <NavLink to="/home" exact>
              HoME
            </NavLink>
          </li>
          <li>
            <NavLink to="/state" exact>
              STATE
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/login">
              Masuk
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

  </div>
);

export default Navbar;
