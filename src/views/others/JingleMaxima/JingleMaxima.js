/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './JingleMaxima.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';

const useStyles = makeStyles({
  lyrics: {
    textAlign: 'center',
    overflowY: 'scroll',
    border: 'solid #F4224B',
    height: '300px',
    padding: '15px 10px 15px 10px',
    borderRadius: '15px',
    marginBottom: '2em',
    margin: 0,
    color: '#1F2C4C',
  },
  musicbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '15px',
    marginTop: '1em',
    padding: '15px',
    margin: 0,
  },
  text: {
    '@media(max-width: 766px)': {
      fontSize: '12px',
    },
  },
});
const JingleMaxima = () => {
  const classes = useStyles();
  return (
    <Box style={{ minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Box className={classes.musicbox}>
          <h1 className="jingle-bersama">BERSAMA</h1>
          <h1 className="jingle-maxima">MAXIMA</h1>
          <AudioPlayer
            className="react-h5-audio-player"
            src="https://d1z9g6p5mcoq6s.cloudfront.net/assets/misc/jingle_maxima.wav"
          />
        </Box>
        <Box className={classes.lyrics}>
          <span className={classes.text}>
            Halo semua
            <br />
            Dengkarkan ini <br />
            Lagu untukmu <br />
            Untuk langkahmu <br />
            Ayo resapi sepenuh hati <br />
            Jalanmu mulai di sini <br />
            <br />
            Tak perlu ragu dengan pilihan <br />
            Kuatkan hatimu hadapi tantangan <br />
            Bangun jalan baru dengan tujuan <br />
            Saatnya kau ambil peran <br />
            <br />
            Teguhkan diri <br />
            Satukan hati <br />
            Langkahmu mulai di sini <br />
            <br />
            REFF : <br />
            Oooo Eeee bersama{' '}
            <span className="jingle-maxima-highlight">MAXIMA</span>
            <br />
            Oooo Eeeee ekspresikan dirimu
            <br />
            Ayo mahasiswa, pacu semangatmu <br />
            Mari kita bangun jalan yang baru <br />
            Bersama{' '}
            <span className="jingle-maxima-highlight">
              MAXIMA
            </span>{' '}
            <br />
            <br />
            Buka buka kita bukan jalan baru <br />
            Maju maju ayo kita melangkah maju
            <br />
            Teguhkan hatimu, raih impianmu <br />
            <br />
            Buka buka kita buka jalan baru <br />
            Maju maju ayo kita melangkah maju <br />
            Satukan hatimu, langkah maju, bersama{' '}
            <span className="jingle-maxima-highlight">MAXIMA</span>
            <br />
            <br />
            REFF
          </span>
        </Box>
      </Container>
    </Box>
  );
};

export default JingleMaxima;
