/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import { AlignMiddle } from '../../../components';
import { YellowLogo, MaxiLand, MxmFrame } from '../../../assets';
import { MxmButton } from '../../../components/reusable/button';
import './Beranda.scss';

const useStyles = makeStyles({
  maxilandbtn: {
    padding: '10px 1em 10px 1em',
  },
});

const Beranda = () => {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'MAXIMA 2020';
  }, []);

  return (
    <motion.div
      initial={{ y: -999 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <Box className="new-beranda">
        <Box className="new-beranda-container">
          <div>
            <h1 className="maxiland-text">
              EMBARK ON A LAND
              <br />
              OF FUN WITH...
              {/* <span style={{ color: '#F2D008' }}>MAXITOUR</span> */}
            </h1>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              <motion.div
                animate={{
                  y: [
                    5,
                    4,
                    3,
                    2,
                    1,
                    0,
                    -1,
                    -2,
                    -3,
                    -4,
                    -5,
                    -4,
                    -3,
                    -2,
                    -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  loop: Infinity,
                }}
              >
                <Link to="/home">
                  <MxmButton
                    className={classes.maxilandbtn}
                    style={{ marginRight: '1.2em' }}
                  >
                    <h6 className="maxiland-text2">HoME 2020</h6>
                  </MxmButton>
                </Link>
              </motion.div>
              <motion.div
                animate={{
                  y: [
                    5,
                    4,
                    3,
                    2,
                    1,
                    0,
                    -1,
                    -2,
                    -3,
                    -4,
                    -5,
                    -4,
                    -3,
                    -2,
                    -1,
                    0,
                    1,
                    2,
                    3,
                    4,
                  ],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  loop: Infinity,
                }}
              >
                <a
                  href="https://mxm.one/maxitour"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MxmButton className={classes.maxilandbtn}>
                    <h2 className="maxiland-text2">MAXITOUR</h2>
                  </MxmButton>
                </a>
              </motion.div>
            </Box>
          </div>
          <motion.div
            animate={{
              y: [
                15,
                14,
                13,
                12,
                11,
                10,
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0,
                -1,
                -2,
                -3,
                -4,
                -5,
                -6,
                -7,
                -8,
                -9,
                -10,
                -11,
                -12,
                -13,
                -14,
                -15,
                -14,
                -13,
                -12,
                -11,
                -10,
                -9,
                -8,
                -7,
                -6,
                -5,
                -4,
                -3,
                -2,
                -1,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
              ],
            }}
            transition={{
              duration: 4.5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          >
            <img src={MaxiLand} alt="Maxiland" className="maxiland" />
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Beranda;
