import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden403 = () => {
  return (
    <>
      <h1>
        Maaf, kamu tidak dapat mengakses halaman ini.
        <Link to="/login">
          Silakan masuk dengan akun yang tepat dahulu.
        </Link>
      </h1>
    </>
  );
};

export default Forbidden403;
