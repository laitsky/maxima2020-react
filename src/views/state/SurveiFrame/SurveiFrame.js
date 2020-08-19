import React from 'react';
import { Container, Box } from '@material-ui/core';
import { AlignMiddle } from '../../../components';

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
  return (
    <Container maxWidth="md">
      <h1
        className="mxm-navy"
        style={{ fontFamily: 'canaro-bold', textAlign: 'center' }}
      >
        Survei STATE DAY {day}
      </h1>
      <AlignMiddle>
        <iframe
          title="Survei STATE"
          src={surveiUrl.find((d) => d.day === Number(day)).url}
          width="640"
          height="1598"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </AlignMiddle>
    </Container>
  );
};

export default SurveiFrame;
