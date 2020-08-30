import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  Alert,
  AlertTitle,
} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2';
import studentService from '../../../services/student';
import './Linimasa.scss';

const Linimasa = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [hasDay, setDays] = useState([]);
  const days = [...Array(4).keys()].map((i) => i + 1);
  let decoded = null;

  useEffect(() => {
    try {
      decoded = jwtDecode(window.sessionStorage.getItem('token'));
    } catch (InvalidTokenError) {
      history.push('/404');
    }
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
    setDays(data.map((d) => d.state_activity.day));
  }, [data]);

  return (
    <Box className="linimasa-bg">
      <motion.div
        initial={{ x: -999, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      >
        <Container maxWidth="sm">
          <h1 id="linimasa-text">LINIMASA</h1>
          <Alert severity="info">
            <AlertTitle>
              <strong>Ahoy, Wanderers!</strong>
            </AlertTitle>
            Kamu dapat mengunduh <em>virtual background</em> kamu{' '}
            <a href="https://mxm.one/virtual-background-maba">disini</a>
          </Alert>
          <Timeline align="alternate">
            {days.map((day) => {
              if (hasDay.includes(day)) {
                const stateData = data.find(
                  (d) => d.state_activity.day === day,
                );
                const { name } = stateData.state_activity;
                return (
                  <TimelineItem>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">
                        Hari {day}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="secondary"/>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography>{name}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                );
              }
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="textSecondary">
                      Hari {day}
                    </Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary"/>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography>-</Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </Container>
      </motion.div>
    </Box>
  );
};
export default Linimasa;
