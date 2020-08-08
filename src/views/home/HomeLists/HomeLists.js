import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import homeMatchParams from '../homeHelpers';
import publicService from '../../../services/public';

const HomeLists = () => {
  const { kategori } = useParams();
  const [data, setData] = useState([]);
  const match = homeMatchParams.find((d) => d.params === kategori);

  useEffect(() => {
    document.title = `Daftar Organisator HoME 2020 - ${kategori
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')}`;

    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.filter(
          (d) => d.kategori === match.kategori,
        );
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      <h1>Archi Tou {match.istilah}</h1>
      <h2>{match.kategori}</h2>
      {data.map((d) => (
        <div key={d.home_id}>
          <img
            style={{ height: '150px', width: 'auto' }}
            src={d.link_logo}
            alt={`Logo ${d.name}`}
            title={`Logo ${d.name}`}
          />
          <Link
            to={`/home/detail-organisator/${d.name
              .toLowerCase()
              .split(' ')
              .join('-')}`}
          >
            <div style={{ border: '2px solid red' }}>
              <p>Nama: {d.name}</p>
              <p>Narasi Singkat: {d.narasi}</p>
            </div>
          </Link>
        </div>
      ))}
      <Link to="/home/puzzle">
        <button type="button">Kembali ke puzzle</button>
      </Link>
    </>
  );
};

export default HomeLists;
