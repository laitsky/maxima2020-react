import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import publicService from '../../../services/public';

const HomeDetail = () => {
  let { organisator } = useParams();
  const [data, setData] = useState({});

  organisator = organisator.split('-').join(' ');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.find(
          (d) => d.name.toLowerCase() === organisator,
        );
        setData(returnedData);
      } catch (err) {
        console.log(err.response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `${data.name} - HoME MAXIMA 2020`;
    console.log('data', data);
  }, [data]);

  return (
    <>
      <h1>{data.name} </h1>
      <iframe
        width="720"
        height="480"
        src={data.link_video}
        title={data.name}
      />
      <p>{data.narasi_panjang}</p>
    </>
  );
};

export default HomeDetail;
