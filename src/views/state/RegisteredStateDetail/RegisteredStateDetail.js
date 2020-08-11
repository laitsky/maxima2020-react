/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Container, Box, Button } from '@material-ui/core';
import CancelStateDialog from './components/CancelStateDialog';
import AbsenStateDialog from './components/AbsenStateDialog';
import { makeStyles } from '@material-ui/core/styles';
import {
  MxmLongCard,
  MxmButton,
  MxmCancelButton,
  MxmStateLogoFrame,
  MxmLogoContainer,
} from '../../../components';
import studentService from '../../../services/student';

const useStyles = makeStyles({
  statetext: {
    color: '#1F2C4C',
    fontFamily: 'canaro-bold',
    padding: 0,
    margin: '10px',
  },  
  statecard:{
    margin: '0 0 1em 0',
    boxShadow: '0 1px 5px #ababab', 
    width: '100%',
    '@media (max-width: 766px)':{
      fontSize: 'medium',
    },
  },
  stateback: {
    marginRight: '0.5em',

    '@media (max-width: 766px)':{
      padding: '10px 20px 10px 20px',
    },
  },
  statebatal: {
    backgroundColor: '#F4224B',
    color: 'white',

    '&:hover':{
      color: '#F2D008',
    },
  },  
  stateabsen: {
    marginLeft: '0.5em',

    '@media (max-width: 766px)':{
      padding: '10px 30px 10px 30px',
    },
  },
  statelogo:{
    '@media (max-width: 766px)':{
      width: '150px',
      height: 'auto',
    },
  },
});


const RegisteredStateDetail = ({ day }) => {
  const classes = useStyles();
  const history = useHistory();
  const [openCancelDialog, setCancelDialog] = useState(false);
  const [openAbsenDialog, setAbsenDialog] = useState(false);
  const [absenLoading, setAbsenLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [kodePresensi, setKodePresensi] = useState('');
  const [data, setData] = useState({
    state_activity: {},
  });
  let decoded = null;

  useEffect(() => {
    try {
      decoded = jwtDecode(window.sessionStorage.getItem('token'));
    } catch (InvalidTokenError) {
      console.log(InvalidTokenError);
    }
    const fetchData = async () => {
      try {
        let returnedData = await studentService.getRegisteredState(
          decoded.nim,
        );
        returnedData = await returnedData.find(
          (d) => d.state_activity.day === day,
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
  }, [data]);

  // cancel dialog handler
  const handleCancelOpen = () => {
    setCancelDialog(true);
  };
  const handleCancelClose = () => {
    setCancelDialog(false);
  };

  // state cancellation handler
  const handleStateCancellation = async () => {
    try {
      decoded = jwtDecode(window.sessionStorage.getItem('token'));
      const returnedData = await studentService.cancelRegisteredState(
        {
          nim: decoded.nim,
          state_id: data.state_id,
        },
      );
      console.log(returnedData);
      history.push({
        pathname: '/state',
        data: {
          severity: 'warning',
          message: `Kamu berhasil membatalkan STATE ${data.state_activity.name}`,
        },
      });
    } catch (err) {
      console.log(err.response);
    }
  };

  // absen dialog handler
  const handleAbsenOpen = () => {
    setAbsenDialog(true);
  };
  const handleAbsenClose = () => {
    setAbsenDialog(false);
  };

  // absen state handler
  const handleAbsenState = async () => {
    setAbsenLoading(true);
    decoded = jwtDecode(window.sessionStorage.getItem('token'));
    const absenData = {
      nim: decoded.nim,
      state_id: data.state_id,
      kode_presensi: kodePresensi,
    };
    setKodePresensi('');
    console.log(absenData);
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          setAbsenLoading(true);
          resolve();
        }, 1500),
      );
      const returnedData = await studentService.absenState(absenData);
      console.log(returnedData);
    } catch (err) {
      setErrorMessage(err.response.data.message);
    }
    setAbsenLoading(false);
  };

  // go back click handler
  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <Container maxWidth="xs" style={{ padding: '0 2em 0 2em'}}>
      <MxmStateLogoFrame>   
        {data.state_activity.link_logo && (
          <MxmLogoContainer className={classes.statelogo} src={data.state_activity.link_logo} />
        )}
      </MxmStateLogoFrame>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <h3 className={classes.statetext}>Tanggal</h3>
        <MxmLongCard className={classes.statecard}>tanggal disini</MxmLongCard>
        <h3 className={classes.statetext}>Link Zoom</h3>
        <MxmLongCard className={classes.statecard}>Link Zoom disini</MxmLongCard>
        <Box 
          marginTop="1em" 
          marginBottom="1em" 
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <MxmCancelButton
            variant="outlined"
            color="secondary"
            onClick={handleBackClick}
            className={classes.stateback}
          >
            Kembali
          </MxmCancelButton>
          <MxmButton onClick={handleAbsenOpen} className={classes.stateabsen}>Absen</MxmButton>
        </Box>
        {data.attendance ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancelOpen}
          >
            Survei Day 2
          </Button>
        ) : (
          <MxmCancelButton
            variant="contained"
            onClick={handleCancelOpen}
            className={classes.statebatal}
          >
            Batalkan STATE ini
          </MxmCancelButton>
        )}
        <CancelStateDialog
          openCancelDialog={openCancelDialog}
          handleCancelClose={handleCancelClose}
          handleStateCancellation={handleStateCancellation}
          name={data.state_activity.name}
        />
        <AbsenStateDialog
          openAbsenDialog={openAbsenDialog}
          handleAbsenClose={handleAbsenClose}
          handleAbsenState={handleAbsenState}
          name={data.state_activity.name}
          day={day}
          kodePresensi={kodePresensi}
          setKodePresensi={setKodePresensi}
          loading={absenLoading}
          error={errorMessage}
        />
      </Box>
    </Container>
  );
};

export default RegisteredStateDetail;
