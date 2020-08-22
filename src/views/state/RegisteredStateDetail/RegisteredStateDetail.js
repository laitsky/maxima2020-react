/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelStateDialog from './components/CancelStateDialog';
import AbsenStateDialog from './components/AbsenStateDialog';
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
  statecard: {
    margin: '0 0 1em 0',
    fontSize: '1.1em',
    boxShadow: '0 1px 5px #ababab',
    width: '100%',
    '@media (max-width: 766px)': {
      fontSize: 'medium',
    },
  },
  stateback: {
    marginRight: '0.5em',

    '@media (max-width: 766px)': {
      padding: '10px 20px 10px 20px',
    },
  },
  statebatal: {
    backgroundColor: '#F4224B',
    color: 'white',

    '&:hover': {
      color: '#F2D008',
    },
  },
  statesurvei: {
    backgroundColor: '#1f2c4c',
    color: 'white',

    '&:hover': {
      color: '#F2D008',
    },
  },
  stateabsen: {
    marginLeft: '0.5em',

    '@media (max-width: 766px)': {
      padding: '10px 30px 10px 30px',
    },
  },
  statelogo: {
    '@media (max-width: 766px)': {
      width: '150px',
      height: 'auto',
    },
  },
});

const surveiUrl = [
  {
    day: 1,
    url: 'https://forms.gle/6wfJmYJjXCqbQ8fW8',
  },
  {
    day: 2,
    url: 'https://forms.gle/A7Z77vwGUprb2ybe8',
  },
  {
    day: 3,
    url: 'https://forms.gle/8Q6e7X7adejtExVD7',
  },
  {
    day: 4,
    url: 'https://forms.gle/KdZXVBF5ahDXPX4x7',
  },
];

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
      Swal.fire({
        title: 'Perhatian!',
        text: InvalidTokenError,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
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
      await studentService.cancelRegisteredState({
        nim: decoded.nim,
        state_id: data.state_id,
      });
      history.push({
        pathname: '/state',
        data: {
          severity: 'warning',
          message: `Kamu berhasil membatalkan STATE ${data.state_activity.name}`,
        },
      });
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
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
    try {
      await new Promise((resolve) =>
        setTimeout(() => {
          setAbsenLoading(true);
          resolve();
        }, 1500),
      );
      await studentService.absenState(absenData);
      history.push({
        pathname: '/state',
        data: {
          severity: 'success',
          message: `Absensi STATE ${data.state_activity.name} berhasil! `,
        },
      });
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
    setAbsenLoading(false);
  };

  // go back click handler
  const handleBackClick = () => {
    history.goBack();
  };

  // handle survei redirect
  const handleSurveiClick = () => {
    window.open(
      surveiUrl.find((d) => d.day === Number(day)).url,
      '_blank',
    );
  };

  // handle link zoom click
  const handleLinkClick = () => {
    window.open(`https://${data.state_activity.room}`, '_blank');
  };

  // eslint-disable-next-line consistent-return
  const printDate = (stateDay) => {
    switch (stateDay) {
      case 1:
        return 'Senin, 7 September 2020';
      case 2:
        return 'Selasa, 8 September 2020';
      case 3:
        return 'Rabu, 9 September 2020';
      case 4:
        return 'Kamis, 10 September 2020';
      default:
        break;
    }
  };
  return (
    <motion.div
      initial={{ y: -999, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <Container maxWidth="xs" style={{ padding: '0 2em 0 2em' }}>
        {data.state_activity.name && (
          <h1
            className="mxm-navy"
            style={{ textAlign: 'center', fontFamily: 'canaro-bold' }}
          >
            {data.state_activity.name}
          </h1>
        )}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.7
          }}
        >
          <MxmStateLogoFrame>
            {data.state_activity.link_logo && (
              <MxmLogoContainer
                className={classes.statelogo}
                src={data.state_activity.link_logo}
              />
            )}
          </MxmStateLogoFrame>
        </motion.div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <h3 className={classes.statetext}>Tanggal</h3>
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.2
            }}
          >
            <MxmLongCard className={classes.statecard}>
              {printDate(data.state_activity.day)}
            </MxmLongCard>
          </motion.div>
          <h3 className={classes.statetext}>Link Zoom</h3>
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1.4
            }}
          >
            <MxmLongCard
              className={classes.statecard}
              onClick={handleLinkClick}
            >
              {data.state_activity.room}
            </MxmLongCard>
          </motion.div>
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
            <MxmButton
              onClick={handleAbsenOpen}
              className={classes.stateabsen}
            >
              Absen
            </MxmButton>
          </Box>
          {data.attendance ? (
            <MxmCancelButton
              variant="contained"
              onClick={handleSurveiClick}
              className={classes.statesurvei}
            >
              Survei STATE 2020
            </MxmCancelButton>
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
    </motion.div>
  );
};

export default RegisteredStateDetail;
