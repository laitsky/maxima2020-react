import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  spacing: {
    marginTop: '12vh',
  },
});

const StateBottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <div className={classes.spacing}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Beranda"
          icon={<HomeWorkIcon />}
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
    </div>
  );
};

export default StateBottomNav;
