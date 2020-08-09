import React, { useState, useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MxmCancelButton } from '../../../components/reusable/button';
import homeMatchParams from '../homeHelpers';
import publicService from '../../../services/public';

const useStyles = makeStyles({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    border: '5px solid #41CEBA',
    width: '160px', 
    height: '160px',
    padding: 0,
    margin: '10px',

    '@media (max-width: 766px)': {
      width: '90px',
      height: '90px',
      margin: '5px',
      border: '3px solid #41CEBA',
    },
  },  
  middle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  desc: {
    display: 'flex',
    backgroundColor: '#F4224B',
    width: '100%',
    borderRadius: '10px',
    height: '160px',
    margin: '10px',
    padding: '20px 40px 20px 40px',

    '@media (max-width: 766px)': {
      margin: '5px',
      height: '90px',
      padding: '10px 20px 10px 20px',
    },
  },
  logo: {
    height: 'auto', 
    width: '150px',

    '@media (max-width: 766px)': {
      width: '80px',
      height: 'auto',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    textTransform: 'uppercase',
    color: '#F2D008',
    fontFamily: 'canaro-bold',
    fontSize: '28px',
    letterSpacing: '2px',

    '@media (max-width: 766px)': {
      fontSize: '13px',
      letterSpacing: 'normal',
    },
  },
  narasi: {
    margin: '5px 0 5px 0',
    letterSpacing: 'normal',
    '@media (max-width: 766px)': {
      fontSize: '8px',
    },
  },
  architou: {
    padding: '0 10px 0 10px', 
    margin: '10px 0 10px 0', 
    textTransform: 'uppercase', 
    color: '#1F2C4C',
    fontFamily: 'canaro-bold',
  },
  architoudesc: {
    padding: '0 10px 0 10px', 
    marginBottom: '2em', 
    textTransform: 'uppercase', 
    color: '#1F2C4C',

    '@media (max-width: 766px)': {
      fontSize: '17px',
      marginBottom: '1em',
    },
  }
});
  
const HomeLists = () => {
  const classes = useStyles();
  const { kategori } = useParams();
  const [data, setData] = useState([]);
  const match = homeMatchParams.find((d) => d.params === kategori);

  useEffect(() => {
    document.title = `Daftar Organisator HoME 2020 - ${kategori
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')}`;

    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.filter(
          (d) => d.kategori === match.kategori,
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
  }, [data]);

  return (
    <>
      <Container maxWidth="md" style={{ padding: '18px 10px 18px 10px'}}>
        <h1 className={classes.architou}>Archi Tou <a style={{ color: '#F2442B' }}>{match.istilah}</a></h1>
        <h2 className={classes.architoudesc}>{match.kategori}</h2>

        {data.map((d) => (
          <div key={d.home_id}>
            <Box className={classes.middle}>
              <Box
                className={classes.image}
              >
                <img
                  className={classes.logo}
                  src={d.link_logo}
                  alt={`Logo ${d.name}`}
                  title={`Logo ${d.name}`}
                />
              </Box>
              <Box className={classes.desc}>
                <Link
                  className={classes.link}
                  to={`/home/detail-organisator/${d.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                >
                  <a className={classes.title}>{d.name}</a>
                  <h3 className={classes.narasi}>{d.narasi}</h3>
                </Link>
              </Box>
            </Box>
          </div>
        ))}
        <Box className={classes.middle}>
          <Link to="/home/puzzle">
            <MxmCancelButton style={{ transform: 'scale(1.5)',margin: '3em' }} type="button">Kembali ke puzzle</MxmCancelButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeLists;
