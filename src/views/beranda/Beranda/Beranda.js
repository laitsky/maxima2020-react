/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import { YellowLogo } from '../../../assets';

const Beranda = () => {
  useEffect(() => {
    document.title = 'MAXIMA 2020 - Coming Soon';
  }, []);

  return (
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
          <img src={YellowLogo} alt="MAXIMA 2020 Logo" />
          <p style={{ fontSize: '3em', fontFamily: 'canaro-bold' }}>tunggu sebentar ya.</p>
          <h1 className="mxm-cyan">agustus 2020</h1>
        </Box>
      </Container>
      <Box
        color="white"
        letterSpacing={5}
        lineHeight={4}
      >
        <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/maximaumn/" target="_blank" rel="noopener noreferrer">INSTAGRAM | </a>
        <a style={{ textDecoration: 'none', color: 'white' }} href="https://lin.ee/fV5PZKk" target="_blank" rel="noopener noreferrer">LINE</a>
      </Box>
      <h4 style={{ letterSpacing: 2, marginLeft: 8 }}>Dikelola oleh Public Relations MAXIMA 2020</h4>
    </Box>
  );
};

export default Beranda;
