import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import adminService from '../../../../../services/admin';

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
        <TableContainer component={Paper}>
          <Table aria-label="Tabel Daftar Kegiatan STATE">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nama Kegiatan</TableCell>
                <TableCell align="center">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow hover key={d.state_id}>
                  <TableCell align="center">{d.name}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/admin/state-detail/${d.state_id}`}
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
                      to={`/admin/edit-state/${d.state_id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button variant="outlined" color="primary">
                        Sunting
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default StateLists;
