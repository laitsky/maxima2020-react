import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import adminService from '../../../../../services/admin';

const PICOrganisator = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Daftar PIC Organisator - Admin MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllPICs();
        console.log('daftar akun berPIC', returnedData);
        setData(returnedData);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Ini adalah halaman PIC Organisator</h1>
      {location.message && (
        <Alert severity="info">{location.message}</Alert>
      )}
    </div>
  );
};

export default PICOrganisator;
