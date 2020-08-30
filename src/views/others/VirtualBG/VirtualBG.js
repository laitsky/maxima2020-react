import React from 'react';
import { Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  zoombgcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
  unduhtext: {
    color: '#1F2C4C',
    margin: '1em 0 2px 0',
    '@media (max-width: 768px)': {
      fontSize: '30px',
    },
  },
  classimg: {
    width: '40vw',
    height: 'auto',
    marginTop: '1.5rem',
    marginBottom: '2.0rem',
    borderRadius: '4px',
    transitionDuration: '0.15s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    '@media (max-width: 768px)': {
      width: '280px',
      height: 'auto',
    },
  },
  classcrew: {
    color: '#F2D008',
    margin: '10px 0 10px 0',
    fontSize: '3.7vw',

    '@media (max-width: 768px)': {
      fontSize: '40px',
    },
  },
  classsailor: {
    color: '#F4224B',
    margin: '10px 0 10px 0',
    fontSize: '3.7vw',

    '@media (max-width: 768px)': {
      fontSize: '40px',
    },
  },
  classwanderer: {
    color: '#41CEBA',
    margin: '10px 0 10px 0',
    fontSize: '3.7vw',
    '@media (max-width: 768px)': {
      fontSize: '40px',
    },
  },
  clickme: {
    color: '#1F2C4C',
    fontSize: '0.9vw',
    fontFamily: 'canaro-bold',

    '@media (max-width: 768px)': {
      fontSize: '12px',
    },
  },
});

const VirtualBG = () => {
  const classes = useStyles();
  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
      style={{ minHeight: '100vh' }}
    >
      <Container
        maxWidth="md"
        style={{ marginTop: '1em', marginBottom: '2em' }}
      >
        <Box className={classes.zoombgcontainer}>
          <h1 className={classes.unduhtext}>
            UNDUH LATAR BELAKANG VIRTUAL KAMU DISINI
          </h1>
          <p className={classes.clickme}>
            ketuk gambar untuk mengunduh.
          </p>
          <br />
          <h2 className={classes.classwanderer}>WANDERER</h2>
          <h6
            className={classes.classwanderer}
            style={{ fontSize: '1rem' }}
          >
            MAHASISWA BARU UMN 2020
          </h6>
          <a href="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/WANDERER+(MABA).jpg">
            <img
              src="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/WANDERER+(MABA).jpg"
              className={classes.classimg}
              alt="VBG Wanderer"
            />
          </a>
          <br />
          <h2 className={classes.classsailor}>SAILOR</h2>
          <h6
            className={classes.classsailor}
            style={{ fontSize: '1rem' }}
          >
            ORGANISATOR
          </h6>
          <a href="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/SAILOR+(ORGANISATOR).jpg">
            <img
              src="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/SAILOR+(ORGANISATOR).jpg"
              className={classes.classimg}
              alt="VBG Sailor"
            />
          </a>
          <h2 className={classes.classcrew}>CREW</h2>
          <h6
            className={classes.classcrew}
            style={{ fontSize: '1rem' }}
          >
            PANITIA MAXIMA 2020
          </h6>
          <a href="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/CREW+(PANITIA).jpg">
            <img
              src="https://d1z9g6p5mcoq6s.cloudfront.net/assets/virtual-background/CREW+(PANITIA).jpg"
              className={classes.classimg}
              alt="VBG Crew"
            />
          </a>
          <br />
        </Box>
      </Container>
    </motion.div>
  );
};

export default VirtualBG;
