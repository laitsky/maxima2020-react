import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';

const HomePuzzle = () => {
  return (
    <Box bgcolor="#1F2C4C" minHeight="100vh">
      <Link to="/home/organisator/sains-dan-sosial">
        <Box>Sains & Sosial</Box>
      </Link>
      <Link to="/home/organisator/seni-dan-budaya">
        <Box>Seni & Budaya</Box>
      </Link>
      <Link to="/home/organisator/olahraga">
        <Box>Olahraga</Box>
      </Link>
      <Link to="/home/organisator/mahasiswa-dan-lso">
        <Box>Mahasiswa & LSO</Box>
      </Link>
      <Link to="/home/organisator/media-kampus">
        <Box>Media Kampus</Box>
      </Link>
      <Link to="/home/organisator/komunitas">
        <Box>Komunitas</Box>
      </Link>
      <Link to="/home/organisator/lembaga-kampus">
        <Box>Lembaga Kampus</Box>
      </Link>
      <Link to="/home/organisator/organisasi-dan-himpunan">
        <Box>Organisasi & Himpunan</Box>
      </Link>
    </Box>
  );
};

export default HomePuzzle;
