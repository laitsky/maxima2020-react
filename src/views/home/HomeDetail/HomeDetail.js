import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Container, Box } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import publicService from '../../../services/public';
import {
  MxmButton,
  MxmCancelButton,
} from '../../../components/reusable/button';
import './HomeDetail.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles({
  container: {
    textAlign: 'left',
    border: 'solid #41CEBA',
    borderRadius: '15px',
    padding: '5px 20px 5px 20px',
    overflowY: 'auto',
    height: '250px',
    marginBottom: '1em',
  },
  lainbutton: {
    margin: '0 10px 0 10px',

    '@media (max-width: 766px)':{
      padding: '10px',
    },
  },
  selesaibutton: {
    margin: '0 10px 2.5px 10px',

    '@media (max-width: 766px)':{
      padding: '10px 15px 10px 15px',
    },
  }
});

const HomeDetail = () => {
  const classes = useStyles();
  const history = useHistory();
  let { organisator } = useParams();
  const [data, setData] = useState({});
  const [photos, setPhotos] = useState([]);

  organisator = organisator.split('-').join(' ');

  const handleCancelClick = () => {
    history.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.find(
          (d) => d.name.toLowerCase() === organisator,
        );
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `${data.name} - HoME MAXIMA 2020`;
    console.log('data', data);
    const fetchData = async () => {
      try {
        const returnedData = await publicService.getHomeByQuery(
          data.search_key,
        );
        setPhotos(returnedData[0].home_media);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <Container
        maxWidth="sm"
        style={{ padding: '18px 10px 18px 10px' }}
      >
        <h1 id="homedetail-nama">{data.name}</h1>
        <iframe
          className="homedetail-iframe"
          src={data.link_video}
          title={data.name}
        />
        <Box className={classes.container}>
          <p>{data.narasi_panjang}</p>
        </Box>
        <Carousel autoPlay>
          {photos.map((photo) => (
            <div key={photo.link_media}>
              <img
                src={photo.link_media}
                alt="Foto"
                style={{ borderRadius: 5 }}
              />
            </div>
          ))}
        </Carousel>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%', marginTop: '1.5em' }}
        >
          <MxmCancelButton
            type="button"
            className={classes.lainbutton}
            onClick={handleCancelClick}
          >
            Lihat yang lain
          </MxmCancelButton>
          <Link
            to={`/home/antanaklasi/${organisator
              .split(' ')
              .join('-')}`}
          >
            <MxmButton
              type="button"
              className={classes.selesaibutton}
            >
              Selesai
            </MxmButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeDetail;
