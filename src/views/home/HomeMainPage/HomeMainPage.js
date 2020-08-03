import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import { HomeIllus } from '../../../assets';
import { MxmButton } from '../../../components';

const useStyles = makeStyles({
  heroTitle: {
    textAlign: 'center',
    fontFamily: 'canaro-bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: '2.5em',
  },
  subtitle: {
    fontSize: '2em',
  },
  homeIllus: {
    height: '320px',
    width: 'auto',
  },
});

const HomeMainPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.heroTitle}>
        <div className={`${classes.title} mxm-navy`}>
          SELAMAT DATANG!
        </div>
        <div className={`${classes.subtitle} mxm-pink`}>
          HoME 2020
        </div>
        <img
          className={classes.homeIllus}
          src={HomeIllus}
          alt="Home Illustration"
          title="Home Illustration"
        />
      </Box>
      <h2>Deskripsi HoME (ubah ini wen)</h2>
      <Link to="/home/puzzle">
        <MxmButton>MASUK</MxmButton>
      </Link>
    </Container>
  );
};

export default HomeMainPage;
