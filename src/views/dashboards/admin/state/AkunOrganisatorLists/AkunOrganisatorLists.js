import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import Swal from 'sweetalert2';
import adminService from '../../../../../services/admin';

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
    name: 'email',
    label: 'Alamat Email',
    options: { filter: true, sort: true },
  },
];
export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = 'Daftar Akun Organisator STATE MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllOrganisators();
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
      <h1>Daftar Akun Organisator STATE MAXIMA 2020</h1>
      <MUIDataTable data={data} columns={tableColumns} />
    </Container>
  );
};
