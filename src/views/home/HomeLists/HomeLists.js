import React from 'react';
import { Link, useParams } from 'react-router-dom';
import acceptableParams from './acceptableParams';

const HomeLists = () => {
  const { kategori } = useParams();
  const match = acceptableParams.find(
    (data) => data.params === kategori,
  );

  return (
    <>
      <h1>Archi Tou {match.istilah}</h1>
      <h2>{match.kategori}</h2>
      <Link to="/home/puzzle">
        <button>Kembali ke puzzle</button>
      </Link>
    </>
  );
};

export default HomeLists;
