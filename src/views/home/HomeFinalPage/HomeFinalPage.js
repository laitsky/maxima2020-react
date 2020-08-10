import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';
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
      d.kategori === kategori ? setTwibbon(d.twibbon) : null,
    );
  }, [data]);

  useEffect(() => {
    console.log('twibbon link', twibbon);
  }, [twibbon]);

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
    <>
      <Container
        maxWidth="sm"
        style={{ padding: '18px 10px 18px 10px' }}
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
          <span className={classes.download}>
            (klik di gambar untuk mengunduh)
          </span>
          <a href={twibbon} download="Twibbon HoME 2020">
            <img
              src={twibbon}
              alt="Twibbon"
              title="Twibbon"
              className={classes.image}
            />
          </a>
        </Box>
        <Box style={{ textAlign: 'left', color: '#1F2C4C' }}>
          <ol>
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
            <br />
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
            <br />
            <li>
              Maximers memberikan caption yang menarik tentang
              “Sebutkan 3 pengalaman yang paling mengesankan selama
              masa karantina"
            </li>
            <br />
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
            <br />
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
          </ol>
          {randomPantun()}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%', marginTop: '1.5em' }}
        >
          <Link to="/home">
            <MxmButton type="button">Kembali ke HoME</MxmButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeFinalPage;
