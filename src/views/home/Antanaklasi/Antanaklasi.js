import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AudioPlayer from 'react-h5-audio-player';
import { Container, Box } from '@material-ui/core';
import { MxmWhite } from '../../../assets';
import homeHelpers from '../homeHelpers';
import 'react-h5-audio-player/src/styles.scss';
import publicService from '../../../services/public';
import { MxmButton } from '../../../components/reusable/button';

const Antanaklasi = () => {
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
    <Box style={{ minHeight: '100vh', backgroundColor: '#F4224B' }}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{
            color: 'white',
            textAlign: 'center',
            padding: '10px 0 0 0',
          }}
        >
          <img
            style={{ width: '100px', height: 'auto' }}
            src={MxmWhite}
            alt="Logo putih MAXIMA 2020"
          />
          <h3 style={{ margin: 0 }}>
            Gunakan earphone biar
            <br />
            cuman kamu yang tahu :) hehe
          </h3>
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
          <h2 style={{ fontFamily: 'canaro-bold', color: 'white' }}>
            {kinitro}
          </h2>
          <Link to={`/home/twibbon/${organisator}`}>
            <MxmButton type="button">Mulai melangkah</MxmButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Antanaklasi;
