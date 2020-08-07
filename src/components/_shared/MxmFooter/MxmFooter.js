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
      className="mxm-foo"
    >
      <Box
        className= "mxm-footer"
      >
        <Box
         className="mxm-footer-content"
        >
          <img
            src={MxmLogoText}
            alt="MAXIMA 2020 Logo"
          />
        </Box>
        <hr
          className= "mxm-footer-divider"
        />
        <Box
          id="footer1"
          className="mxm-footer-content"
        >
          <h3 style={{ margin: '5px 0 5px 0' }}>EXPLORE</h3>
          <Box
            className="mxm-footer-subcontent"
          >
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
        </Box>
        <hr
          className= "mxm-footer-divider"
        />
        <Box
          className="mxm-footer-content"
        >
          <h3 style={{ margin: '5px 0 0 0' }}>Follow Us</h3>
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
        className="mxm-footer-copyright"
      >
        <h6>
          &copy; Dikelola oleh Public Relations MAXIMA 2020
        </h6>
      </Box>
    </Box>
  </>
);

export default MxmFooter;
