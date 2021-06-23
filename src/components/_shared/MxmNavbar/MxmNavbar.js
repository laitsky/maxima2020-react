import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MxmNavbar.scss';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Dehaze';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../../assets/mxm20_title_icon.png';
import { MxmCancelButton } from '../../reusable/button';

const isLoggedIn = !!window.sessionStorage.getItem('token');

const useStyles = makeStyles({
  Redbutton: {
    // display: 'none', // diubah lagi pas state
    backgroundColor: '#F4224B',
    padding: '1px 5px 1px 5px',
    transitionDuration: '0.2s',
    marginLeft: '2px',
    marginRight: '2px',
    fontFamily: "'Baloo Tamma 2', sans-serif",
    fontSize: '1.1vw',
    transform: 'scale(0.85)',

    '& a': {
      textDecoration: 'none',
      color: 'white',
    },

    '&:hover a': {
      color: '#F4224B',
    },

    '&:hover': {
      backgroundColor: 'white',
    },

    '&:active a': {
      color: '#F2D008',
    },

    '@media(max-width: 768px)': {
      fontSize: 'large',
    },
  },
  Whitebutton: {
    // display: 'none', // diubah lagi pas state
    padding: '1px 5px 1px 5px',
    transitionDuration: '0.2s',
    marginLeft: '2px',
    marginRight: '2px',
    fontFamily: "'Baloo Tamma 2', sans-serif",
    fontSize: '1.1vw',
    transform: 'scale(0.85)',

    '& a': {
      textDecoration: 'none',
      color: '#F4224B',
    },

    '&:hover a': {
      color: '#F2D008',
    },

    '@media(max-width: 768px)': {
      fontSize: 'large',
    },
  },
});

export default () => {
  const classes = useStyles();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
    >
      <header className="Header">
        <Box className="Navbar-logo">
          <NavLink
            to="/"
            exact
            tabIndex="-1"
            style={{ outline: 'none' }}
          >
            <img
              src={logo}
              alt="Malam Ekspresi Mahasiswa 2020"
              className="Logo"
            />
          </NavLink>
        </Box>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <nav className="Nav">
            <div className="Nav-section Nav-text">
              <NavLink
                to="/home"
                onClick={toggleNav}
                exact
                style={{ margin: '0 15px 0 15px' }}
              >
                HoME
              </NavLink>

              {isLoggedIn && (
                <NavLink
                  to="/state"
                  onClick={toggleNav}
                  exact
                  style={{ margin: '0 15px 0 15px' }}
                >
                  STATE
                </NavLink>
              )}

              <NavLink
                to="/jingle-maxima"
                onClick={toggleNav}
                exact
                style={{ margin: '0 15px 0 15px' }}
              >
                Jingle MAXIMA
              </NavLink>

              <a
                href="https://mxm.one/maxitour"
                target="_blank"
                rel="noopener noreferrer"
                style={{ margin: '0 15px 0 15px' }}
              >
                MAXITOUR
              </a>

              <NavLink
                to="/faq"
                onClick={toggleNav}
                exact
                style={{ margin: '0 15px 0 15px' }}
              >
                FAQ
              </NavLink>

              <NavLink
                to="/about-us"
                onClick={toggleNav}
                exact
                style={{ margin: '0 15px 0 15px' }}
              >
                About Us
              </NavLink>
            </div>

            <div className="Nav-section2">
              {isLoggedIn ? (
                <MxmCancelButton className={classes.Whitebutton}>
                  <NavLink
                    to="/logout"
                    onClick={toggleNav}
                    exact
                    style={{ margin: '0 15px 0 15px' }}
                  >
                    KELUAR
                  </NavLink>
                </MxmCancelButton>
              ) : (
                <>
                  <MxmCancelButton className={classes.Whitebutton}>
                    <NavLink
                      to="/login"
                      onClick={toggleNav}
                      exact
                      style={{ margin: '0 15px 0 15px' }}
                    >
                      MASUK
                    </NavLink>
                  </MxmCancelButton>

                  <MxmCancelButton className={classes.Whitebutton}>
                    <NavLink
                      to="/daftar"
                      onClick={toggleNav}
                      exact
                      style={{ margin: '0 15px 0 15px' }}
                    >
                      DAFTAR
                    </NavLink>
                  </MxmCancelButton>
                </>
              )}
            </div>
          </nav>
        </CSSTransition>
        <button type="button" onClick={toggleNav} className="Burger">
          <MenuIcon />
        </button>
      </header>
    </motion.div>
  );
};
