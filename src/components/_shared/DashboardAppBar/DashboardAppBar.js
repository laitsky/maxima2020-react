import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const DashboardAppBar = ({
  handleToggleSidebar,
  title,
  logout,
  back,
}) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        {back ? (
          <IconButton
            type="button"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="back"
            onClick={() => history.push('/panitia')}
          >
            <HomeIcon />
          </IconButton>
        ) : (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleToggleSidebar}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {logout && (
          <Link
            to="/logout"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button color="inherit">Keluar</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DashboardAppBar;
