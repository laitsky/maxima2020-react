import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AudioPlayer from 'react-h5-audio-player';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import homeHelpers from '../homeHelpers';
import 'react-h5-audio-player/src/styles.scss';
import publicService from '../../../services/public';
import { MxmButton } from '../../../components/reusable/button';

const useStyles = makeStyles({
  leftline: {
    border: '4px solid #F2D008',
    width: '15px',
    margin: '0 15px 0 15px',
    borderTopRightRadius: '25px',
    borderBottomLeftRadius: '25px',
    backgroundColor: '#F2D008',
  },
  antanaklasi: {
    margin: '1em 0 1em 0',
    width: '100%',
    fontSize: '40px',
    fontFamily: 'canaro-bold',
  },
});

const Antanaklasi = () => {
  const classes = useStyles();
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [voiceNote, setVoiceNote] = useState('');
  const [kinitro, setKinitro] = useState('');
  useEffect(() => {
    document.title = 'Antanaklasi - HoME MAXIMA 2020';
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
        ? (setVoiceNote(d.voicenote), setKinitro(d.kinitro))
        : null,
    );
  }, [data]);

  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <Box
        style={{
          minHeight: '100vh',
          backgroundColor: '#F4224B',
          textAlign: 'center',
        }}
      >
        <Container
          maxWidth="sm"
          style={{ padding: '1em 10px 1em 10px' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Box className={classes.antanaklasi}>
              <h2 style={{ margin: '0' }}>
                ANTANA
                <br />
              </h2>
              <Box display="flex" justifyContent="center">
                <span
                  className={classes.leftline}
                  style={{ transform: 'rotate(90deg)' }}
                />
                <h2 style={{ margin: '0 0 0 25px' }}>KLASI</h2>
              </Box>
            </Box>
            <h2 style={{ margin: 0 }}>
              Gunakan earphone biar
              <br />
              cuman kamu yang tahu :) hehe
            </h2>
            <AudioPlayer
              style={{ marginTop: '1em', backgroundColor: '#F4224B' }}
              className="react-h5-audio-player"
              src={voiceNote}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ marginTop: '3em' }}
          >
            <h1 style={{ fontFamily: 'canaro-bold', color: 'white' }}>
              {kinitro}
            </h1>
            <Link to={`/home/twibbon/${organisator}`}>
              <MxmButton type="button">Mulai melangkah</MxmButton>
            </Link>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Antanaklasi;
