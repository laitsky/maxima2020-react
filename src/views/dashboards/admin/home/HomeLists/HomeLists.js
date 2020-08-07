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

const HomeLists = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Daftar Organisator HoME - MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllHome();
        setData(returnedData.data);
      } catch (err) {
        console.log(err.response);
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
        <TableContainer component={Paper}>
          <Table aria-label="Tabel Daftar Organisator HoME">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nama Organisator</TableCell>
                <TableCell align="center">Kategori</TableCell>
                <TableCell align="center">Aksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow hover key={d.home_id}>
                  <TableCell align="center">{d.name}</TableCell>
                  <TableCell align="center">{d.kategori}</TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/admin/edit-home/${d.home_id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button variant="contained" color="primary">
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

export default HomeLists;
