import React, { useState, useEffect } from 'react';
import shortenerService from '../../../../../services/shortener';

const ShortenerLists = () => {
  const [shorteners, setShorteners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await shortenerService.getAll();
      setShorteners(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Ini halaman shortener</h1>
      {shorteners.map((s) => (
        <h6>{s.short_url}</h6>
      ))}
    </div>
  );
};

export default ShortenerLists;
