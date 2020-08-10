/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {
  MxmLogoContainer,
  AlignMiddle,
  MxmLongCard,
  StateTokenContainer,
} from '../../../components';
import logo from '../../../assets/mxm20_logo.png';
import studentService from '../../../services/student';
import './StateMainPage.scss';

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
  const location = useLocation();
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [hasDay, setDays] = useState([]);
  const [stateToken, setStateToken] = useState(Number);
  const days = [...Array(4).keys()].map((i) => i + 1);
  let decoded = null;

  useEffect(() => {
    try {
      decoded = jwtDecode(window.sessionStorage.getItem('token'));
    } catch (InvalidTokenError) {
      console.log(InvalidTokenError);
    }
    const fetchData = async () => {
      try {
        const returnedData = await studentService.getRegisteredState(
          decoded.nim,
        );
        setData(returnedData);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('data', data);
    // hasil map di bawah ini itu nyaring days dari orang lain juga,
    // jadi pake Set (unique value only) buat nyaringnya.
    setDays(data.map((d) => d.state_activity.day));
  }, [data]);

  useEffect(() => {
    console.log('hasDay', hasDay);
    setStateToken(days.length - hasDay.length);
  }, [hasDay]);

  return (
    <div id="state_main_page-container">
      <Container maxWidth="xs" className={classes.spacing}>
        <AlignMiddle>
          <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
          <h1
            className="mxm-navy"
            style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}
          >
            SELAMAT DATANG!
          </h1>
          <StateTokenContainer mt="0.25em" mb="1em">
            Kamu memiliki {stateToken} token
          </StateTokenContainer>
          {/* alert message */}
          {location.data && (
            <Alert severity={location.data.severity}>
              {location.data.message}
            </Alert>
          )}
        </AlignMiddle>
        {days.map((day) => {
          if (hasDay.includes(day)) {
            const stateData = data.find(
              (d) => d.state_activity.day === day,
            );
            const { name } = stateData.state_activity;
            return (
              <Link
                key={`key${day}`}
                to={`/state/detail-registrasi/day${day}`}
                exact
                style={{ textDecoration: 'none' }}
              >
                <MxmLongCard key={`key${day}`}>{name}</MxmLongCard>
              </Link>
            );
          }
          return (
            <Link
              key={`key${day}`}
              to={`/state/daftar/day${day}`}
              exact
              style={{ textDecoration: 'none' }}
            >
              <MxmLongCard key={`key${day}`}>DAY 0{day}</MxmLongCard>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default StateMainPage;
