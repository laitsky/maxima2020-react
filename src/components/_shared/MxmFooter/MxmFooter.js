import React from 'react';
import { Box } from '@material-ui/core';
import { AlignMiddle } from '../../reusable';
import {
  MxmLogoText,
  InstagramLogo,
  LINELogo,
} from '../../../assets';
import './MxmFooter.css';

const MxmFooter = () => (
  <>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      style={{
        backgroundColor: '#fafafa',
        paddingTop: '1em',
        paddingBottom: '1em',
        color: '#1F2C4C',
        boxShadow: '0 -1px 30px black',
      }}
    >
      <AlignMiddle>
        <img
          src={MxmLogoText}
          alt="MAXIMA 2020 Logo"
          style={{
            width: '100px',
            height: 'auto',
            margin: 0,
            padding: 0,
          }}
        />
      </AlignMiddle>
      <hr
        style={{ transform: 'rotate(45)', margin: 0, padding: 0 }}
      />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <h3 style={{ margin: '5px 0 5px 0' }}>EXPLORE</h3>
        <a
          style={{
            fontSize: 'smaller',
            color: '#F4224B',
            marginBottom: '10px',
          }}
        >
          HOME
        </a>
        <a
          style={{
            fontSize: 'smaller',
            color: '#F4224B',
            marginBottom: '10px',
          }}
        >
          STATE
        </a>
        <a
          style={{
            fontSize: 'smaller',
            color: '#F4224B',
            marginBottom: '10px',
          }}
        >
          Login
        </a>
      </Box>
      <hr
        style={{ transform: 'rotate(45)', margin: 0, padding: 0 }}
      />
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
            <img
              src={LINELogo}
              style={{
                width: '30px',
                height: 'auto',
                margin: '10px',
              }}
              alt="LINE"
            />
          </a>
          <a
            href="https://www.instagram.com/maximaumn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramLogo}
              style={{
                width: '30px',
                height: 'auto',
                margin: '10px',
              }}
              alt="Instagram"
            />
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
      <h6
        style={{
          letterSpacing: 2,
          padding: 0,
          margin: '2px 0 0 5px',
        }}
      >
        &copy; Dikelola oleh Public Relations MAXIMA 2020
      </h6>
    </Box>
  </>
);

export default MxmFooter;
