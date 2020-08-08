import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';

const HomeFinalPage = () => {
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [twibbon, setTwibbon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.find(
          (d) =>
            d.name.toLowerCase() === organisator.split('-').join(' '),
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
    const { kategori } = data;
    homeHelpers.find((d) =>
      d.kategori === kategori ? setTwibbon(d.twibbon) : null,
    );
  }, [data]);

  useEffect(() => {
    console.log('twibbon link', twibbon);
  }, [twibbon]);

  return (
    <>
      <h1>Ini adalah halaman twibbon {organisator}</h1>
      <h2>
        Link twibbon dapat diperoleh melalui referensi variable
        `twibbon`: {twibbon}
      </h2>
      <img src={twibbon} alt="Twibbon" title="Twibbon" width="300px"  />
    </>
  );
};

export default HomeFinalPage;
