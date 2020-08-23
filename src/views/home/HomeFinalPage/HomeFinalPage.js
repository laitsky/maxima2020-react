import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { motion } from 'framer-motion';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';
import {
  MxmButton,
  MxmCancelButton,
} from '../../../components/reusable/button';
import { MxmLogo } from '../../../assets';

const useStyles = makeStyles({
  image: {
    width: '300px',
    height: 'auto',

    '@media (max-width: 766px)': {
      width: '250px',
      height: 'auto',
    },
  },
  ayotwibbon: {
    fontSize: '20px',
    margin: '10px 0 0 0',

    '@media (max-width: 766px)': {
      fontSize: '15px',
    },
  },
  download: {
    fontFamily: 'canaro-light',
    fontSize: '12px',
    margin: '10px 0 3em 0',
    '@media (max-width: 766px)': {
      fontSize: '8px',
    },
  },
});

const HomeFinalPage = () => {
  const classes = useStyles();
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [twibbon, setTwibbon] = useState('');
  const [generator, setGenerator] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.find(
          (d) =>
            d.name.toLowerCase() === organisator.split('-').join(' '),
        );
        setData(returnedData);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const { kategori } = data;
    homeHelpers.homeMatchParams.find((d) =>
      d.kategori === kategori
        ? (setTwibbon(d.twibbon), setGenerator(d.generator))
        : null,
    );
  }, [data]);

  const randomPantun = () => {
    const { homePantun } = homeHelpers;
    const rand = Math.floor(Math.random() * homePantun.length);
    return (
      <div style={{ textAlign: 'center', marginTop: '0.5em' }}>
        <span>{homePantun[rand].baris1}</span>
        <br />
        <span>{homePantun[rand].baris2}</span>
      </div>
    );
  };
  return (
    <Container
      maxWidth="sm"
      style={{ padding: '18px 10px 18px 10px', minHeight: '100vh' }}
    >
      <motion.div
        initial={{ y: -999, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{
            marginBottom: '2em',
            textAlign: 'center',
            color: '#1F2C4C',
            fontFamily: 'canaro-bold',
          }}
        >
          <img
            src={MxmLogo}
            alt="Maxima2020"
            title="Maxima2020"
            width="100"
          />
          <span className={classes.ayotwibbon}>
            Ayo ceritakan dan tunjukkan pengalaman serumu dengan
            memakai Twibbon ini!
          </span>
          {twibbon ? (
            <img
              src={twibbon}
              alt="Twibbon"
              title="Twibbon"
              className={classes.image}
            />
          ) : (
            <Skeleton
              variant="rect"
              width={300}
              height={300}
              animation="wave"
            />
          )}
        </Box>
      </motion.div>
      <Box style={{ textAlign: 'left', color: '#1F2C4C' }}>
        <ol>
          <motion.div
            initial={{ x: -999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 0.5,
            }}
          >
            <li>
              Maximers wajib meng-upload di akun instagram pribadi dan
              <span
                style={{
                  fontFamily: 'canaro-bold',
                  marginLeft: '0.2em',
                }}
              >
                akun tidak di Private.
              </span>
            </li>
          </motion.div>
          <br />
          <motion.div
            initial={{ x: 999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 0.7,
            }}
          >
            <li>
              Maximers meng-upload foto tersebut ke Instagram dengan
              men-tag akun Instagram
              <span
                style={{
                  fontFamily: 'canaro-bold',
                  marginLeft: '0.2em',
                }}
              >
                @maximaumn{' '}
              </span>
              dan menggunakan hashtag
              <span
                style={{
                  fontFamily: 'canaro-bold',
                  marginLeft: '0.2em',
                }}
              >
                #HoME2020 #PaveYourOwnJourney
              </span>
            </li>
          </motion.div>
          <br />
          <motion.div
            initial={{ x: -999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 0.9,
            }}
          >
            <li>
              Maximers memberikan caption yang menarik tentang
              “Sebutkan 3 pengalaman yang paling mengesankan selama
              masa karantina"
            </li>
          </motion.div>
          <br />
          <motion.div
            initial={{ x: 999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.1,
            }}
          >
            <li>
              Awali caption kamu dengan kalimat seperti ini, ya! :
              <br />
              <span
                style={{
                  textAlign: 'center',
                  fontStyle: 'italic',
                  marginTop: '0.5em',
                  fontFamily: 'canaro-bold',
                }}
              >
                Halo, MAXIMERS! Perkenalkan aku (Nama Lengkap) dan aku
                siap untuk berpetualang bersama #
                {organisator
                  .split('-')
                  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                  .join('')}
              </span>
            </li>
          </motion.div>
          <br />
          <motion.div
            initial={{ x: -999, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.3,
            }}
          >
            <li>
              Twibbon tersebut digunakan sebagai satu
              <span
                style={{
                  fontFamily: 'canaro-bold',
                  marginLeft: '0.2em',
                }}
              >
                persyaratan dalam mengikuti STATE.
              </span>
            </li>
          </motion.div>
        </ol>
        <motion.div
          initial={{ y: 999, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 1.5,
          }}
        >
          <span style={{ textTransform: 'uppercase' }}>
            {randomPantun()}
          </span>
        </motion.div>
      </Box>
      <motion.div
        initial={{ y: 999, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
          delay: 1.5,
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%', marginTop: '1.5em' }}
        >
          <a href={twibbon} download="TemplateTwibbon.png">
            <MxmButton type="button" style={{ width: '100%' }}>
              Unduh Template Twibbon
            </MxmButton>
          </a>
          <a href={generator} target="_blank" rel="noreferrer">
            <MxmButton
              type="button"
              style={{ width: '100%', marginTop: '1.5em' }}
            >
              Pasang Twibbon Otomatis
            </MxmButton>
          </a>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%', marginTop: '1.5em' }}
        >
          <Link to="/home">
            <MxmCancelButton type="button">
              Kembali ke HoME
            </MxmCancelButton>
          </Link>
        </Box>
      </motion.div>
    </Container>
  );
};

export default HomeFinalPage;
