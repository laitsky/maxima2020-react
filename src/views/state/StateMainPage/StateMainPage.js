import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  MxmLogoContainer,
  AlignMiddle,
} from '../../../components/reusable/container';
import { MxmLongCard } from '../../../components/reusable/card';
import logo from '../../../assets/mxm20_logo.png';
import userService from '../../../services/user';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  spacing: {
    marginBottom: '5rem',
  },
});

const StateMainPage = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await userService.getCredential(22222);
        setData(returnedData);
        console.log(returnedData);
      } catch (ex) {
        console.log(ex.response);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container maxWidth="xs" className={classes.spacing}>
        <AlignMiddle>
          <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
          <h1
            className="mxm-navy"
            style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}
          >
            SELAMAT DATANG!
          </h1>
        </AlignMiddle>
        <Link
          to="/state/daftar"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 01</MxmLongCard>
        </Link>
        <Link
          to="/state/daftar"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 02</MxmLongCard>
        </Link>
        <Link
          to="/state/daftar"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 03</MxmLongCard>
        </Link>
      </Container>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/tour"
          label="Profil"
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default StateMainPage;
