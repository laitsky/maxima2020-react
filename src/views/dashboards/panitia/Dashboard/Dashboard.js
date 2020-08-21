import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Container, Divider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Swal from 'sweetalert2';
import panitiaService from '../../../../services/panitia';

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
          to={`/panitia/lihat-peserta/${tableMeta.rowData[0]}`}
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await panitiaService.getAllState();
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
    console.log(data);
  }, [data]);
  return (
    <Container style={{ paddingTop: '2em' }}>
      <h1 style={{ marginTop: '1.5em' }}>Daftar Kegiatan STATE</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default Dashboard;
