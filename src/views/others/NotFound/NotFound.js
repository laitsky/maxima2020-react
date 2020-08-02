import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = '404 Tidak Ditemukan - MAXIMA 2020';
  }, []);

  return (
    <h1>
      Maaf, halaman yang kamu minta ditemukkan. Silakan ulangi lagi.
      <Link to="/">Kembali ke halaman utama</Link>
    </h1>
  );
};

export default NotFound;
