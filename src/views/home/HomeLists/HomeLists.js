import React, { useState, useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MxmHomeContainer } from '../../../components/reusable/container';
import { MxmCancelButton } from '../../../components/reusable/button';
import homeMatchParams from '../homeHelpers';
import publicService from '../../../services/public';

const useStyles = makeStyles({
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  middle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '200px', 
    height: '200px', 
    margin: '10px', 
    border: '5px solid #41CEBA',
    boxShadow: '0 10px 10px #c7c7c7',
  },
  logo: {
    height: 'auto', 
    width: '150px',
  },
  desc: {
    border: 'solid #F4224B', 
    backgroundColor: '#F4224B', 
    height: '200px', 
    width: '670px',
    margin: '10px', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start',
    transitionDuration: '0.2s',

    '&:hover':{
      boxShadow: '0 10px 10px #c7c7c7',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  title: {
    textTransform: 'uppercase',
    color: '#F2D008',
    padding: 0,
    margin: '20px 0 0 0',
    fontFamily: 'canaro-bold',
    fontSize: '28px',
    letterSpacing: '2px',
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
    <Box
      style={{
        padding: '1em 0 1em 0',
      }}
    >
      <Container maxWidth="md">
        <Box
          className={classes.left}
        >
          <h1 className={classes.architou}>Archi Tou <a style={{ color: '#F2442B' }}>{match.istilah}</a></h1>
          <h2 className={classes.architoudesc}>{match.kategori}</h2>
          {data.map((d) => (
            <div key={d.home_id}>
              <Box
                className={classes.middle}
              >
                <MxmHomeContainer
                  className={classes.image}
                >
                  <img
                    className={classes.logo}
                    src={d.link_logo}
                    alt={`Logo ${d.name}`}
                    title={`Logo ${d.name}`}
                  />
                </MxmHomeContainer>
                <MxmHomeContainer className={classes.desc}>
                  <Link
                    to={`/home/detail-organisator/${d.name
                      .toLowerCase()
                      .split(' ')
                      .join('-')}`}
                    className={classes.link}
                  >
                    <a className={classes.title}>{d.name}</a>
                    <h3>{d.narasi}</h3>
                  </Link>
                </MxmHomeContainer>
              </Box>
            </div>
          ))}
          <Box
            className={classes.middle}
            style={{ width: '100%' }}
          >  
            <Link to="/home/puzzle">
              <MxmCancelButton style={{ transform: 'scale(1.5)',margin: '3em' }} type="button">Kembali ke puzzle</MxmCancelButton>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeLists;
