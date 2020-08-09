/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './JingleMaxima.scss';

const JingleMaxima = () => {
  return (
    <div>
      <h1>Ini adalah halaman Jingle Maxima</h1>
      <h2>
        Jangan lupa usahain pake Box, Container, dan lain-lain. Kalau
        mau pake CSS, usahain pake makeStyles dan useStyles sepeprti
        yang berada pada halaman HomeMainPage. Tapi, usahain juga buat
        pake styled-components. semangat bro.
      </h2>
      <AudioPlayer
        className="react-h5-audio-player"
        src="https://d1z9g6p5mcoq6s.cloudfront.net/assets/misc/jingle_maxima.wav"
      />
    </div>
  );
};

export default JingleMaxima;
