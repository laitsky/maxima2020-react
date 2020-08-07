import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized401 = () => {
  return (
    <>
      <h1>
        Maaf, kamu tidak terautentikasi untuk mengakses halaman ini.
        <Link to="/login">Silakan masuk terlebih dahulu.</Link>
      </h1>
    </>
  );
};

export default Unauthorized401;
