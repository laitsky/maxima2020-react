import React from 'react';
import { motion } from 'framer-motion';
import './MxmNavbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/mxm20_title_icon.png';

const isLoggedIn = !!window.sessionStorage.getItem('token');

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
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
              {isLoggedIn ? (
                <NavLink to="/logout">Keluar</NavLink>
              ) : (
                <NavLink to="/login">Masuk</NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
