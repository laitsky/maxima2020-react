import React from 'react';

const surveiUrl = [
  {
    day: 1,
    url: 'https://forms.gle/6wfJmYJjXCqbQ8fW8',
  },
  {
    day: 2,
    url: 'https://forms.gle/A7Z77vwGUprb2ybe8',
  },
  {
    day: 3,
    url: 'https://forms.gle/8Q6e7X7adejtExVD7',
  },
  {
    day: 4,
    url: 'https://forms.gle/KdZXVBF5ahDXPX4x7',
  },
];

const SurveiFrame = ({ day }) => {
  console.log(surveiUrl.find((d) => d.day === Number(day)).url);
  return (
    <div>
      <h1>Ini adalah halaman SurveiFrame</h1>
    </div>
  );
};

export default SurveiFrame;
