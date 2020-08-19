/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import { AlignMiddle } from '../../../components';
import { YellowLogo } from '../../../assets';
import './Beranda.scss';

const Beranda = () => {
  useEffect(() => {
    document.title = 'MAXIMA 2020 - Coming Soon';
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <Box
        color="#FFD008"
        bgcolor="#1F2C4C"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={2}
      >
        <Container maxWidth="sm">
          <Box paddingBottom={12}>
            <AlignMiddle>
              <img src={YellowLogo} alt="MAXIMA 2020 Logo" />
            </AlignMiddle>
            <div style={{ color: 'white', textAlign: 'center' }}>
              <p
                style={{ fontSize: '3em', fontFamily: 'canaro-bold' }}
              >
                YOU WANDERED TO THE RIGHT PAGE!
              </p>
              <h1>Sadly, our page is still on an Odyssey...</h1>
              <h2>Check our Instagram instead for more info!</h2>
            </div>
          </Box>
        </Container>
        <Box
          display="flex"
          flexDirection="row"
          color="white"
          letterSpacing={5}
          lineHeight={4}
        >
          <a
            className="insta-text"
            href="https://www.instagram.com/maximaumn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <p className="slash-text">|</p>
          <a
            className="line-text"
            href="https://lin.ee/fV5PZKk"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINE
          </a>
        </Box>
        <h4 style={{ letterSpacing: 2, marginLeft: 8 }}>
          Dikelola oleh Public Relations MAXIMA 2020
        </h4>
      </Box>
    </motion.div>
  );
};

export default Beranda;
