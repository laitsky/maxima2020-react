import React, { useState, useEffect } from 'react';
import { Box, Container, Divider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Swal from 'sweetalert2';
import acaraService from '../../../../services/acara';

const tableColumns = [
  {
    name: 'nim',
    label: 'NIM',
    options: { filter: true, sort: true },
  },
  {
    name: 'name',
    label: 'Nama',
    options: { filter: true, sort: true },
  },
  {
    name: 'instagram',
    label: 'ID Instagram',
    options: { filter: true, sort: true },
  },
  {
    name: 'email',
    label: 'Email',
    options: { filter: true, sort: true },
  },
];
const DaftarMaba = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = 'Daftar Mahasiswa Baru - MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await acaraService.getAllMaba();
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
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Ini adalah halaman daftar maba</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default DaftarMaba;
