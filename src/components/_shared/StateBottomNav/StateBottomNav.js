import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import TimelineIcon from '@material-ui/icons/Timeline';
import InfoIcon from '@material-ui/icons/Info';

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
          component={Link}
          to="/state"
          label="Beranda"
          icon={<HomeWorkIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/state/linimasa"
          label="Linimasa"
          icon={<TimelineIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/state/info"
          label="Newsfeed"
          icon={<InfoIcon />}
        />
        {/* <BottomNavigationAction
          component={Link}
          to="/state/profil"
          label="Profil"
          icon={<AccountCircleIcon />}
        /> */}
      </BottomNavigation>
    </div>
  );
};

export default StateBottomNav;
