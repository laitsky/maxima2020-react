import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Divider } from '@material-ui/core';
import Swal from 'sweetalert2';
import MUIDataTable from 'mui-datatables';
import panitiaService from '../../../../services/panitia';

const tableColumns = [
  {
    name: 'nim',
    label: 'nim',
    options: { display: false, print: false },
  },
  {
    name: 'nama',
    label: 'Nama',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value, tableMeta) => (
        <>
          {value} ({tableMeta.rowData[0]})
        </>
      ),
    },
  },
  {
    name: 'kehadiran',
    label: 'Kehadiran',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => <>{value ? 'Ya' : 'Tidak'}</>,
    },
  },
];

const LihatPeserta = () => {
  const { stateId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await panitiaService.viewRegisteredState(
          stateId,
        );
        returnedData = returnedData.map((d) => ({
          nim: d.nim,
          nama: d.user.name,
          kehadiran: d.attendance,
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
    <Container style={{ paddingTop: '2em' }}>
      <h1 style={{ marginTop: '1.5em' }}>Lihat Peserta</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <Box style={{ marginTop: '1em' }}>
        <MUIDataTable data={data} columns={tableColumns} />
      </Box>
    </Container>
  );
};

export default LihatPeserta;
