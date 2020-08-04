import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import adminService from '../../../../../services/admin';

const StateLists = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllState();
        setData(returnedData);
        console.log(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="State Lists Table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nama Organisator</TableCell>
              <TableCell>Kuota</TableCell>
              <TableCell>Hari ke-</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.state_id}>
                <TableCell component="th" scope="row">
                  {d.name}
                </TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.quota}</TableCell>
                <TableCell>{d.day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StateLists;
