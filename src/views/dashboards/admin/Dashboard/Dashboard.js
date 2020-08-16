import React, { useEffect } from 'react';
import adminService from '../../../../services/admin';

const Dashboard = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const returnedData = await adminService.getAllMaba();
        console.log('maba', returnedData);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchData();
  });
  return (
    <>
      <h1>Ini halaman dashboard</h1>
    </>
  );
};
export default Dashboard;
