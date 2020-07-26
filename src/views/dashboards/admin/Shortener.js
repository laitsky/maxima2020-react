import React, { useState, useEffect } from 'react';
import shortenerService from '../../../services/shortener';

const Shortener = () => {
  const [shorteners, setShorteners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await shortenerService.getAll();
      setShorteners(data);
    };
    fetchData();
  }, []);

  console.log(shorteners);

  return (
    <div>
      {shorteners.map((s) => <h6>{s.short_url}</h6>)}
    </div>
  );
};

export default Shortener;
