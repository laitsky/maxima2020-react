import React from 'react';
import { motion } from 'framer-motion';
import './MxmNavbar.scss';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import logo from '../../../assets/mxm20_title_icon.png';
import { MxmLogo } from '../../../assets';
import { Container, Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { MxmCancelButton } from '../../../components/reusable/button';

const isLoggedIn = !!window.sessionStorage.getItem('token');

const useStyles = makeStyles({
  Redbutton:{
    backgroundColor: '#F4224B', 
    padding: '1px 5px 1px 5px', 
    transitionDuration: '0.2s',
    marginLeft: '2px',
    marginRight: '2px',
    fontFamily: "'Baloo Tamma 2', sans-serif",
    fontSize: 'large',
    transform: 'scale(0.85)',

    '& a':{
      textDecoration: 'none',
      color: '#F2D008',
    },

    '&:hover a':{
      color: '#F4224B',
    },

    '&:hover':{
      backgroundColor: 'white',
    },
  },
  Whitebutton:{
    padding: '1px 5px 1px 5px', 
    transitionDuration: '0.2s', 
    marginLeft: '2px',
    marginRight: '2px',
    fontFamily: "'Baloo Tamma 2', sans-serif",
    fontSize: 'large',
    transform: 'scale(0.85)',

    '& a':{
      textDecoration: 'none',
      color: '#F4224B',
    },

    '&:hover a':{
      color: '#F2D008',
    },
  },
});

export default function Header() {
  const classes = useStyles();
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

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
      <header className="Header" style={{ marginBottom: '70px' }}>
        <Box className="Navbar-logo">
          <NavLink to="/" onClick={toggleNav} exact>
            <img src={logo} alt="Malam Ekspresi Mahasiswa 2020" className="Logo"/>
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
              <NavLink to="/home" onClick={toggleNav} exact style={{ margin : '0 15px 0 15px'}}>
                HoME
              </NavLink>

              <NavLink to="/state" onClick={toggleNav} exact style={{ margin : '0 15px 0 15px'}}>
                STATE
              </NavLink>

              <NavLink to="/jingle-maxima" onClick={toggleNav} exact style={{ margin : '0 15px 0 15px'}}>
                Jingle MAXIMA
              </NavLink>
            </div>

            <div className="Nav-section2">
              <MxmCancelButton className={classes.Whitebutton}>
                <NavLink to="/daftar" onClick={toggleNav} exact style={{ margin : '0 15px 0 15px'}}>
                  DAFTAR
                </NavLink>
              </MxmCancelButton>

              <MxmCancelButton className={classes.Redbutton}>
                <NavLink to="/login" onClick={toggleNav} exact style={{ margin : '0 15px 0 15px'}}>
                  MASUK
                </NavLink>
              </MxmCancelButton>
            </div>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className="Burger">
          <span role="img"><MenuIcon></MenuIcon></span>
        </button>
      </header>
    </motion.div>
  );
}
