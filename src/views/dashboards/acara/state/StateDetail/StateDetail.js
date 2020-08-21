/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MUIDataTable from 'mui-datatables';
import { Paper, Tab, Tabs } from '@material-ui/core';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';
import TabPanel from './components/TabPanel';

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const tableColumns = [
  {
    name: 'nama',
    label: 'Nama',
    options: {
      customBodyRender: (_value, tableMeta) => (
        <p>{`${tableMeta.rowData[3]} - ${tableMeta.rowData[2]}`}</p>
      ),
    },
  },
  {
    name: 'attendance',
    label: 'Kehadiran',
    options: {
      customBodyRender: (_value, tableMeta) => (
        <p>{tableMeta.rowData[1] ? 'Hadir' : '-'}</p>
      ),
    },
  },
  {
    name: 'nim',
    label: 'Nomor Induk Mahasiswa',
    options: { display: false },
  },
  {
    name: 'name',
    label: 'Nama Mahasiswa',
    options: { display: false },
  },
];
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
        setRegistered(
          returnedRegistered.map((d) => ({
            nim: d.nim,
            attendance: d.attendance,
            name: d.user.name,
          })),
        );
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
          <MUIDataTable data={registered} columns={tableColumns} />
        </TabPanel>
      </Paper>
    </>
  );
};

export default StateDetail;
