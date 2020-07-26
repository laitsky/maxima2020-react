import React from 'react';
import { useParams } from 'react-router-dom';

const ShowName = () => {
  const { name } = useParams();
  return (
    <h1>
      Hello,
      {name}
    </h1>
  );
};

export default ShowName;
