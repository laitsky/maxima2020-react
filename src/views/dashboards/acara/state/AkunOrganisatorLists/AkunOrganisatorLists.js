import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import acaraService from '../../../../../services/acara';

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
        const returnedData = await acaraService.getAllOrganisators();
        setData(returnedData);
      } catch (err) {
        console.log(err.response.data);
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
