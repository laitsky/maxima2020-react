import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import {
  MxmButton,
  MxmLogoContainer,
  MxmStateLogoFrame,
  MxmLongCard,
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
  statelogo: {
    '@media (max-width: 766px)': {
      width: '150px',
      height: 'auto',
    },
  },
});

const StateOrgDetail = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [nim, setNim] = useState(Number);
  let { organisator } = useParams();
  const history = useHistory();
  organisator = organisator.split('-').join(' ');
  useEffect(() => {
    document.title = 'Detail Organisator - STATE MAXIMA 2020';
    const decoded = window.sessionStorage.getItem('token')
      ? jwtDecode(window.sessionStorage.getItem('token'))
      : '';
    setNim(decoded.nim);

    const fetchData = async () => {
      try {
        let returnedData = await studentService.getAllState();
        returnedData = returnedData.find(
          (o) => o.name.toLowerCase() === organisator,
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

  const handleClick = async () => {
    // eslint-disable-next-line camelcase
    const { state_id } = data;

    try {
      const returnedStatus = await studentService.registerState({
        nim,
        state_id,
      });
      if (returnedStatus === 200) {
        history.push({
          pathname: '/state',
          data: {
            severity: 'success',
            message: `Kamu berhasil mendaftarkan diri untuk STATE ${organisator.toUpperCase()}`,
          },
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
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
      initial={{ x: -999, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
      }}
    >
      <Container maxWidth="xs" style={{ padding: '0 2em 0 2em' }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MxmStateLogoFrame>
            {data.link_logo && (
              <MxmLogoContainer
                className={classes.statelogo}
                src={data.link_logo}
              />
            )}
          </MxmStateLogoFrame>
          <h3 className={classes.statetext}>Nama Kegiatan</h3>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 0.7
            }}
          >
            <MxmLongCard className={classes.statecard}>
              {data.name}
            </MxmLongCard>
          </motion.div>
          <h3 className={classes.statetext}>Tanggal</h3>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 20,
              delay: 1
            }}
          >
            <MxmLongCard className={classes.statecard}>
              {printDate(data.day)}
            </MxmLongCard>
          </motion.div>
          <Box style={{ marginTop: '1em', marginBottom: '1em' }}>
            <MxmButton onClick={handleClick}>
              Simpan (Hari {data.day})
            </MxmButton>
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default StateOrgDetail;
