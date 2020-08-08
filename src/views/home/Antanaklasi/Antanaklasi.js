import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import publicService from '../../../services/public';
import homeHelpers from '../homeHelpers';

const Antanaklasi = () => {
  const { organisator } = useParams();
  const [data, setData] = useState({});
  const [voiceNote, setVoiceNote] = useState('');

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
      d.kategori === kategori ? setVoiceNote(d.voicenote) : null,
    );
  }, [data]);

  useEffect(() => {
    console.log('voicenote link', voiceNote);
  }, [voiceNote]);

  return (
    <>
      <h1>Ini adalah halaman Antanaklasi {data.kategori}</h1>
      <h2>
        Link voiceNote bisa didapatkan melalu referensi variabel
        `voiceNote`: {voiceNote}
      </h2>
      <Link to={`/home/twibbon/${organisator}`}>
        <button type="button">Mulai melangkah</button>
      </Link>
    </>
  );
};

export default Antanaklasi;
