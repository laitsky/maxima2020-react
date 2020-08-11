import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import { MxmWhite } from '../../../assets';
import { MxmButton } from '../../../components/reusable/button';

const Antanaklasi = () => {
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [voiceNote, setVoiceNote] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.find(
          (d) =>
            d.name.toLowerCase() === organisator.split('-').join(' '),
        );
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('data', data);
    const { kategori } = data;
    homeHelpers.homeMatchParams.find((d) =>
      d.kategori === kategori ? setVoiceNote(d.voicenote) : null,
    );
  }, [data]);

  useEffect(() => {
    console.log('voicenote link', voiceNote);
  }, [voiceNote]);

  return (
    <Box style={{ minHeight: '100vh', backgroundColor: '#F4224B' }}>
      <Container maxWidth="sm">
        <Box 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{ color: 'white', textAlign: 'center', padding: '10px 0 0 0' }}
        >
          <img
            style={{ width: '100px', height: 'auto' }}
            src={MxmWhite}
          />
          <h3 style={{ margin: 0 }}>Gunakan earphone biar<br/>cumin kamu yang tahu :) hehe</h3>
          <AudioPlayer
            style={{ marginTop: '1em', backgroundColor: '#F4224B'}}
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
          <h2 style={{ fontFamily: 'canaro-bold', color: 'white' }}>Aku lebih dari impianku!</h2>
          <Link to={`/home/twibbon/${organisator}`}>
            <MxmButton type="button">Mulai melangkah</MxmButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Antanaklasi;
