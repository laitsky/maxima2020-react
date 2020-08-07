/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Container, Box, Button } from '@material-ui/core';
import CancelStateDialog from './components/CancelStateDialog';
import AbsenStateDialog from './components/AbsenStateDialog';
import {
  MxmLongCard,
  MxmButton,
  MxmLogoContainer,
} from '../../../components';
import studentService from '../../../services/student';

const RegisteredStateDetail = ({ day }) => {
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
    <Container maxWidth="xs">
      {data.link_logo && <MxmLogoContainer src={data.link_logo} />}
      <h3>Tanggal</h3>
      <MxmLongCard>tanggal disini</MxmLongCard>
      <h3>Link Zoom</h3>
      <MxmLongCard>Link Zoom disini</MxmLongCard>
      <Box marginTop="2em" marginBottom="2em">
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBackClick}
        >
          Kembali
        </Button>
        <MxmButton onClick={handleAbsenOpen}>Absen</MxmButton>
      </Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleCancelOpen}
      >
        Batalkan STATE ini
      </Button>
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
    </Container>
  );
};

export default RegisteredStateDetail;
