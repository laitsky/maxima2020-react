/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Swal from 'sweetalert2';
import {
  MaxiLand,
  FrameAtas,
  FrameBawah,
  KapalMxm,
  MxmLogoText,
  ZoomBG,
  MaxiIllus,
} from '../../../assets';
import {
  MxmButton,
  MxmAppendInput,
} from '../../../components/reusable';
import './Beranda.scss';
import malpunService from '../../../services/malpun';

const useStyles = makeStyles({
  maxilandbtn: {
    padding: '10px 1em 10px 1em',
  },
  inpcont: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    transform: 'translateY(-3em)',

    '@media(max-width:1024px)': {
      width: '100%',
      transform: 'none',
    },
  },
  transformUp: {
    transform: 'translateY(-5.5em)',

    '@media(max-width:1024px)': {
      transform: 'none',
    },
  },
  malpunbtn: {
    backgroundColor: 'inherit',
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
    color: 'white',
    fontFamily: 'canaro-bold',
  },
});

const Beranda = () => {
  const [email, setEmail] = useState('');
  const classes = useStyles();
  useEffect(() => {
    document.title =
      'MALAM PUNCAK MAXIMA 2020 - MAXIMA Isla: Fiesta Para El Winner';
  }, []);

  const submitEmail = async () => {
    if (email.length === 0) {
      Swal.fire({
        title: 'Perhatian!',
        text: 'Isi alamat email kamu!',
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } else {
      try {
        setEmail('');
        const returnedData = await malpunService.mailService(email);
        Swal.fire({
          title: 'Perhatian!',
          text: returnedData.message,
          icon: 'success',
          confirmButtonText: 'Coba lagi',
        });
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitEmail();
    }
  };

  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 25,
        damping: 20,
      }}
    >
      <Box className="new-beranda">
        <img
          src={FrameAtas}
          alt="Frame atas"
          className="maxiland-alt-frame"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className={classes.transformUp}
        >
          <img
            src={MxmLogoText}
            alt="text logo maxima"
            className="malpun-mxm-img"
          />
          <span
            className="malpun-text"
            style={{ margin: '0.7em 0 0.7em 0' }}
          >
            MAU NONTON MALAM PUNCAK?
          </span>
          <Box className="new-beranda-container" id="mxm-malpun">
            <motion.div
              animate={{
                y: [
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
                ],
              }}
              transition={{
                duration: 3.5,
                ease: 'easeInOut',
                loop: Infinity,
              }}
            >
              <img
                src={MaxiIllus}
                alt="Ilustrasi MAXIMA"
                className="maxiland-malpun"
              />
            </motion.div>
            <Box className={classes.inpcont}>
              <span
                className="maxiland-isi-email"
                style={{ color: '#1F2C4C' }}
              >
                ISI EMAIL-MU DISINI !
              </span>
              <MxmAppendInput className="malpun-inp">
                <input
                  type="text"
                  placeholder="Masukkan email kamu disini..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <span>
                  <button
                    type="button"
                    className={classes.malpunbtn}
                    onClick={submitEmail}
                  >
                    SEND!
                  </button>
                </span>
              </MxmAppendInput>
              <span className="malpun-desc">
                Klik link Youtube Live
                <br />
                yang kami beri, ya!
                <br />
              </span>
              <span className="maxiland-isi-email">
                ENJOY MAXIMA 2020!
              </span>
            </Box>
          </Box>
        </Box>
        <Box
          className="new-beranda-container"
          style={{ marginBottom: '1em' }}
        >
          <iframe
            className="beranda-maxima-video"
            src="https://www.youtube.com/embed/xzw9Dtjoquk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Pengenalan MAXIMA 2020"
          />
        </Box>
        <Box className="new-beranda-container">
          <div>
            <h1 className="maxiland-text">
              Unduh latar belakang
              <br />
              ZOOM kamu di sini
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
                <Link to="virtual-bg">
                  <MxmButton className={classes.maxilandbtn}>
                    <h2 className="maxiland-text2">UNDUH!</h2>
                  </MxmButton>
                </Link>
              </motion.div>
            </Box>
          </div>
          <motion.div
            animate={{
              y: [
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
              ],
            }}
            transition={{
              duration: 3.5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          >
            <img src={ZoomBG} alt="Maxiland" className="maxiland" />
          </motion.div>
        </Box>
        <Box className="new-beranda-container" id="kapal-maxima">
          <motion.div
            animate={{
              y: [
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
              ],
            }}
            transition={{
              duration: 3.5,
              ease: 'easeInOut',
              loop: Infinity,
            }}
          >
            <img src={KapalMxm} alt="Maxiland" className="maxiland" />
          </motion.div>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={MxmLogoText}
              alt="kapal maxima"
              className="kapal-maxima-logo"
            />
            <h1
              className="maxiland-text"
              style={{ marginTop: '0', marginBottom: '10px' }}
            >
              AHOY WANDERERS!
            </h1>
            <span className="your-journey">
              Your odyssey starts here
            </span>
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
                <MxmButton className={classes.maxilandbtn}>
                  <h4 className="maxiland-text-here">
                    Visit HoME 2020
                  </h4>
                </MxmButton>
              </Link>
            </motion.div>
          </Box>
        </Box>
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
                <a
                  href="https://mxm.one/maxitour"
                  target="_blank"
                  rel="noreferrer noopener"
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
        <img
          src={FrameBawah}
          alt="frame bawah"
          className="maxiland-alt-frame"
        />
      </Box>
    </motion.div>
  );
};

export default Beranda;
