import React, { useEffect } from 'react';
import adminService from '../../../../../services/admin';

const PICOrganisator = () => {
  useEffect(() => {
    document.title = 'Daftar PIC Organisator - Admin MAXIMA 2020';

  }, []);
  return (
    <div>
      <h1>Ini adalah halaman PIC Organisator</h1>
    </div>
  );
};

export default PICOrganisator;
