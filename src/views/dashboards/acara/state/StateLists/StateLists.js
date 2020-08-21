import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Container, Divider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Alert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';

const tableColumns = [
  {
    name: 'state_id',
    label: 'STATE ID',
    options: { display: false },
  },
  {
    name: 'name',
    label: 'Nama Kegiatan',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'kode_presensi',
    label: 'Kode Presensi',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'Actions',
    label: 'Aksi',
    options: {
      print: false,
      customBodyRender: (value, tableMeta) => (
        <>
          <Link
            to={`/acara/state-detail/${tableMeta.rowData[0]}`}
            style={{
              textDecoration: 'none',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '0.5em' }}
            >
              Detail
            </Button>
          </Link>
          <Link
            to={`/acara/edit-state/${tableMeta.rowData[0]}`}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="outlined" color="primary">
              Sunting
            </Button>
          </Link>
        </>
      ),
    },
  },
];

const StateLists = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Daftar Kegiatan STATE - MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await acaraService.getAllState();
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
    console.log('data', data);
  }, [data]);
  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Daftar Kegiatan STATE 2020</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      {location.message && (
        <Alert severity="success">{location.message}</Alert>
      )}
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default StateLists;
