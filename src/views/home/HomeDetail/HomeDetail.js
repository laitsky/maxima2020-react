import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import publicService from '../../../services/public';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MxmButton, MxmCancelButton } from '../../../components/reusable/button';
import { MxmHomeContainer } from '../../../components/reusable/container';
import './HomeDetail.scss';

const useStyles = makeStyles({
  container: {
    textAlign: 'justify',
    border: 'solid #41CEBA',
    borderRadius: '15px',
    padding: '5px 20px 5px 20px',
    overflowY: 'auto',
    height: '250px',
    marginBottom: '1em',
  },
});

const HomeDetail = () => {
  const classes = useStyles();
  let { organisator } = useParams();
  const [data, setData] = useState({});

  organisator = organisator.split('-').join(' ');

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
  }, [data]);

  return (
    <>
      <Container maxWidth="sm" style={{ padding: '18px 10px 18px 10px'}}>
        <h1>{data.name}</h1>
        <iframe
          width="560" 
          height="315"
          src={data.link_video}
          title={data.name}
        />
        <Box className={classes.container}> 
          <p>{data.narasi_panjang}</p>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <MxmCancelButton type="button" style={{ margin: '0 10px 0 10px' }}>Cancel</MxmCancelButton>
          <Link
            to={`/home/antanaklasi/${organisator.split(' ').join('-')}`}
          >
            <MxmButton type="button" style={{ margin: '0 10px 5px 10px' }}>Selesai</MxmButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeDetail;
