import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  MxmLogoContainer,
  AlignMiddle,
} from '../../../components/reusable/container';
import { MxmLongCard } from '../../../components/reusable/card';
import logo from '../../../assets/mxm20_logo.png';
import userService from '../../../services/user';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  spacing: {
    marginBottom: '5rem',
  },
});

const StateMainPage = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await userService.getCredential(22222);
        setData(returnedData);
        console.log(data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [data]);

  return (
    <>
      <Container maxWidth="xs" className={classes.spacing}>
        <AlignMiddle>
          <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
          <h1
            className="mxm-navy"
            style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}
          >
            SELAMAT DATANG!
          </h1>
        </AlignMiddle>
        <Link
          to="/state/daftar/day1"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 01</MxmLongCard>
        </Link>
        <Link
          to="/state/daftar/day2"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 02</MxmLongCard>
        </Link>
        <Link
          to="/state/daftar/day3"
          exact
          style={{ textDecoration: 'none' }}
        >
          <MxmLongCard>DAY 03</MxmLongCard>
        </Link>
      </Container>
    </>
  );
};

export default StateMainPage;
