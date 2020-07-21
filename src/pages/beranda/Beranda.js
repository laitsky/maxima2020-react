import React, { useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import logo from '../../assets/mxm_yellow.png';

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
    >
      <Container maxWidth="sm">
        <img src={logo} alt="MAXIMA 2020 Logo" />
        <p style={{ fontSize: '3em', fontFamily: 'canaro-bold' }}>tunggu sebentar ya.</p>
        <h1 className="mxm-cyan">agustus 2020</h1>
      </Container>
      <Box
        color="white"
        letterSpacing={5}
        lineHeight={4}
      >
        INSTAGRAM | LINE
      </Box>
      <h4 style={{ letterSpacing: 2 }}>Dikelola oleh Public Relations MAXIMA 2020</h4>
    </Box>
  );
};

export default Beranda;
