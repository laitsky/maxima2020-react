import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Container, Divider } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MUIDataTable from 'mui-datatables';
import Swal from 'sweetalert2';
import adminService from '../../../../../services/admin';

const tableColumns = [
  {
    name: 'home_id',
    label: 'Home ID',
    options: { display: false, print: false },
  },
  {
    name: 'name',
    label: 'Nama Organisator',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'kategori',
    label: 'Kategori',
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
      customBodyRender: (_value, tableMeta) => (
        <>
          <Link
            to={`/admin/edit-home/${tableMeta.rowData[0]}`}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" color="primary">
              Sunting
            </Button>
          </Link>
        </>
      ),
    },
  },
];

const HomeLists = () => {
  const location = useLocation();

  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Daftar Organisator HoME - MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllHome();
        setData(returnedData.data);
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
    console.log('data: ', data);
  }, [data]);
  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Daftar Organisator HOME 2020</h1>
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

export default HomeLists;
