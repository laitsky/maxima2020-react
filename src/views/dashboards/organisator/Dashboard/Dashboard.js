import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Box, Button, Container, Divider } from '@material-ui/core';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import organisatorService from '../../../../services/organisator';

const tableColumns = [
  {
    name: 'state_id',
    label: 'State ID',
    options: { display: false, print: false },
  },
  {
    name: 'day',
    label: 'Hari',
    options: { display: false, print: false },
  },
  {
    name: 'quota',
    label: 'Kuota',
    options: { display: false, print: false },
  },
  {
    name: 'registered',
    label: 'Terdaftar',
    options: { display: false, print: false },
  },
  {
    name: 'name',
    label: 'Nama Kegiatan',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (_value, tableMeta) => (
        <>
          {_value} (Hari {tableMeta.rowData[1]})
        </>
      ),
    },
  },
  {
    name: 'kuota-terisi',
    label: 'Kuota/Terisi',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (_value, tableMeta) => (
        <>
          {tableMeta.rowData[2]}/{tableMeta.rowData[3]}
        </>
      ),
    },
  },
  {
    name: 'actions',
    label: 'Lihat Peserta',
    options: {
      print: false,
      customBodyRender: (_value, tableMeta) => (
        <Link
          to={`/organisator/lihat-peserta/${tableMeta.rowData[0]}`}
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="primary">
            Lihat Peserta
          </Button>
        </Link>
      ),
    },
  },
];
const Dashboard = () => {
  const [data, setData] = useState([]);
  const decoded = jwtDecode(window.sessionStorage.getItem('token'));
  const { nim } = decoded;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await organisatorService.viewState(nim);
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

  return (
    <Container style={{ paddingTop: '2em' }}>
      <h1 style={{ marginTop: '1.5em' }}>Dashboard Kamu</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default Dashboard;
