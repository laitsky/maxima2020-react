/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import { YellowLogo, MxmLogoText, InstagramLogo, LINELogo } from '../../../assets';
import './Beranda.css';
import { AlignMiddle } from '../../../components/reusable/container';

const Beranda = () => {
  useEffect(() => {
    document.title = 'MAXIMA 2020 - Coming Soon';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
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
            <img src={YellowLogo} alt="MAXIMA 2020 Logo" />
            <p style={{ fontSize: '3em', fontFamily: 'canaro-bold' }}>
              tunggu sebentar ya.
            </p>
            <h1 className="mxm-cyan">agustus 2020</h1>
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
      
      {/*Footer start*/}
      <div
        display="flex"
        flexDirection="row"
        alignItems= "center"
        style={{ width: '100%' }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          style={{
            backgroundColor: '#fafafa',
            paddingTop: '1em',
            paddingBottom: '1em',
            color: '#1F2C4C',
            boxShadow: '0 -1px 30px black'
          }}
        >
          <AlignMiddle>
            <img src={MxmLogoText} alt="MAXIMA 2020 Logo" style={{ width: '100px', height: 'auto', margin: 0, padding: 0}}/>
          </AlignMiddle>
          <hr style={{ transform: 'rotate(45)', margin: 0, padding: 0 }}></hr>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <h3 style={{ margin: '5px 0 5px 0' }}>EXPLORE</h3>
            <a style={{ fontSize: 'smaller',color: '#F4224B', marginBottom: '10px' }}>HOME</a>
            <a style={{ fontSize: 'smaller',color: '#F4224B', marginBottom: '10px' }}>STATE</a>
            <a style={{ fontSize: 'smaller',color: '#F4224B', marginBottom: '10px' }}>Login</a>
          </Box>
          <hr style={{ transform: 'rotate(45)', margin: 0, padding: 0 }}></hr>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <h3 style={{ margin: '5px 0 5px 0' }}>Follow Us</h3>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <a 
                href="https://lin.ee/fV5PZKk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LINELogo} style={{ width: '30px', height: 'auto', margin: '10px' }} alt="LINE"/>
              </a>
              <a
                href="https://www.instagram.com/maximaumn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramLogo} style={{ width: '30px', height: 'auto', margin: '10px' }} alt="Instagram"/>
              </a>
            </Box>
          </Box>
        </Box>
        <Box
         display="flex"
          style={{
            borderTop: '0.5px solid black',
            backgroundColor: '#fafafa',
            color: '#1F2C4C',
            padding: '1em',
          }}
        >
          <h6 style={{ letterSpacing: 2, padding: 0, margin: '2px 0 0 5px' }}>
            &copy; Dikelola oleh Public Relations MAXIMA 2020
          </h6>
        </Box>
      </div>
      {/*Footer end*/}
    </motion.div>
  );
};

export default Beranda;
