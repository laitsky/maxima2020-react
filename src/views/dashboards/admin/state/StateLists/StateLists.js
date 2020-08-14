import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Container, Divider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Alert from '@material-ui/lab/Alert';
import adminService from '../../../../../services/admin';

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
            to={`/admin/state-detail/${tableMeta.rowData[0]}`}
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
            to={`/admin/edit-state/${tableMeta.rowData[0]}`}
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
        const returnedData = await adminService.getAllState();
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

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
