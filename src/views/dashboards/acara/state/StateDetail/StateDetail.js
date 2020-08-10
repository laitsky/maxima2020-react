/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Paper,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import acaraService from '../../../../../services/acara';
import TabPanel from './components/TabPanel';

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const StateDetail = () => {
  const { stateId } = useParams();
  const [data, setData] = useState({});
  const [registered, setRegistered] = useState([
    {
      user: {},
    },
  ]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = 'Detail Kegiatan STATE - MAXIMA 2020 Acara';
    const fetchData = async () => {
      try {
        let returnedData = await acaraService.getStateById(stateId);
        returnedData = returnedData.find(
          (d) => d.state_id === Number(stateId),
        );
        setData(returnedData);
        const returnedRegistered = await acaraService.viewRegisteredState(
          stateId,
        );
        setRegistered(returnedRegistered);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  useEffect(() => {
    console.log('registered', registered);
  }, [registered]);

  return (
    <>
      <h1>Detail Kegiatan dan Peserta Registrasi STATE</h1>
      <Paper style={{ marginBottom: '2em' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Detail Kegiatan" {...a11yProps(0)} />
          <Tab label="Peserta Registrasi" {...a11yProps(1)} />
        </Tabs>
      </Paper>
      <Paper>
        <TabPanel value={value} index={0}>
          <img src={data.link_logo} alt="logo" height="360px" />
          <h1>{data.name}</h1>
          <h2>Hari Kegiatan: {data.day}</h2>
          <h2>
            Kuota: {data.quota} (Terisi: {registered.length})
          </h2>
          <h2>Kode Presensi: {data.kode_presensi}</h2>
          <h2>Link Zoom: {data.room}</h2>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer component={Paper}>
            <Table aria-label="Peserta Registrasi Kegiatan STATE">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nama</TableCell>
                  <TableCell align="center">Kehadiran</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {registered.map((r) => (
                  <TableRow hover key={r.nim}>
                    <TableCell align="center">
                      {r.user.name} ({r.nim})
                    </TableCell>
                    <TableCell align="center">
                      {r.attendance || '-'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Paper>
    </>
  );
};

export default StateDetail;
