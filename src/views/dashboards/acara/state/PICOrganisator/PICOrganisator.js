import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Container, Divider } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import MUIDataTable from 'mui-datatables';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';

const tableColumns = [
  {
    name: 'nim',
    label: 'NIM',
    options: { filter: true, sort: true },
  },
  {
    name: 'nama',
    label: 'Nama PIC',
    options: { filter: true, sort: true },
  },
  {
    name: 'kegiatan',
    label: 'Nama Kegiatan',
    options: { filter: true, sort: true },
  },
];

const PICOrganisator = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Daftar PIC Organisator - Acara MAXIMA 2020';
    const fetchData = async () => {
      try {
        let returnedData = await acaraService.getAllPICs();
        returnedData = returnedData.map((d) => ({
          nim: d.nim,
          nama: d.user.name,
          kegiatan: d.state_activity.name,
        }));
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
      <h1>Ini adalah halaman PIC Organisator</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      {location.message && (
        <Alert severity="info">{location.message}</Alert>
      )}
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default PICOrganisator;
