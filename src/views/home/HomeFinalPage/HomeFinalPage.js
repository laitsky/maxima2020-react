import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MxmButton } from '../../../components/reusable/button';
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
    margin: '10px 0 3em 0',

    '@media (max-width: 766px)': {
      fontSize: '15px',
    },
  }
});

const HomeFinalPage = () => {
  const classes = useStyles();
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [twibbon, setTwibbon] = useState('');

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
    homeHelpers.find((d) =>
      d.kategori === kategori ? setTwibbon(d.twibbon) : null,
    );
  }, [data]);

  useEffect(() => {
    console.log('twibbon link', twibbon);
  }, [twibbon]);

  return (
    <>
      <Container maxWidth="sm" style={{ padding: '18px 10px 18px 10px'}}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          style={{ marginBottom: '2em',textAlign: 'center',color: '#1F2C4C', fontFamily: 'canaro-bold' }}
        >
          <img src={MxmLogo} alt="Maxima2020" title="Maxima2020" width="100"/>
          <a className={classes.ayotwibbon}>Ayo ceritakan dan tunjukkan pengalaman serumu dengan memakai Twibbon ini !</a>
          <img src={twibbon} alt="Twibbon" title="Twibbon" className={classes.image}/>
        </Box>
        <Box
          style={{ textAlign: 'left', color: '#1F2C4C' }}
        >
          <ol>
            <li>
              Maximers wajib meng-upload di akun instagram pribadi dan <a style={{ fontFamily: 'canaro-bold' }}>akun tidak di Private.</a>
            </li>
            <br/>
            <li>
              Maximers meng-upload foto tersebut ke Instagram dengan men-tag akun Instagram <a style={{ fontFamily: 'canaro-bold' }}>@maximaumn</a> dan menggunakan hashtag <a style={{ fontFamily: 'canaro-bold' }}>#HoME2020 #PaveYourOwnJourney.</a>
            </li>
            <br/>
            <li>
              Maximers memberikan caption yang menarik tentang “Sebutkan 3 pengalaman yang paling mengesankan selama masa
            </li>
            <br/>
            <li>
              Twibbon tersebut digunakan sebagai satu <a style={{ fontFamily: 'canaro-bold' }}>persyaratan dalam mengikuti STATE.</a>
            </li>
          </ol>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <MxmButton type="button">Back To HoME</MxmButton>
        </Box>
      </Container>
    </>
  );
};

export default HomeFinalPage;
