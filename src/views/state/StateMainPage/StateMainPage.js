/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  const decoded = window.sessionStorage.getItem('token')
    ? jwtDecode(window.sessionStorage.getItem('token'))
    : '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await studentService.getRegisteredState(
          decoded.nim,
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
    // hasil map di bawah ini itu nyaring days dari orang lain juga,
    // jadi pake Set (unique value only) buat nyaringnya.
    setDays(data.map((d) => d.state_activity.day));
  }, [data]);

  useEffect(() => {
    setStateToken(3 - hasDay.length);
  }, [hasDay]);

  return (
    <motion.div
      initial={{ y: -999 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <div id="state_main_page-container">
        <Container maxWidth="xs" className={classes.spacing}>
          <AlignMiddle>
            <motion.div
              initial={{ y: -999 }}
              animate={{ y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
            >
              <MxmLogoContainer src={logo} alt="MAXIMA 2020 Logo" />
            </motion.div>
            <h1
              className="mxm-navy"
              style={{ textAlign: 'center', fontFamily: 'canaro-bold', marginTop: 0 }}
            >
              SELAMAT DATANG!
            </h1>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.7
              }}
            >
              <StateTokenContainer mt="0.25em" mb="1em">
                Kamu memiliki {stateToken} token
              </StateTokenContainer>
              {/* alert message */}
              {location.data && (
                <Alert severity={location.data.severity}>
                  {location.data.message}
                </Alert>
              )}
            </motion.div>
          
          </AlignMiddle>
          {days.map((day, i) => {
            if (hasDay.includes(day)) {
              const stateData = data.find(
                (d) => d.state_activity.day === day,
              );
              const { name } = stateData.state_activity;
              return (
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 1 + 0.3*i,
                  }}
                >
                  <Link
                    key={`key${day}`}
                    to={`/state/detail-registrasi/day${day}`}
                    exact
                    style={{ textDecoration: 'none' }}
                  >
                    <MxmLongCard key={`key${day}`}>{name}</MxmLongCard>
                  </Link>
                </motion.div>
              );
            }
            return (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 1 + 0.3*i,
                }}
              >  
                <Link
                  key={`key${day}`}
                  to={`/state/daftar/day${day}`}
                  exact
                  style={{ textDecoration: 'none' }}
                >
                  <MxmLongCard key={`key${day}`}>DAY 0{day}</MxmLongCard>
                </Link>
              </motion.div>
            );
          })}
        </Container>
      </div>
    </motion.div>
  );
};

export default StateMainPage;
