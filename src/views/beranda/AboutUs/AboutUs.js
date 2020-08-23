import React from 'react';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MxmLogoText, MxmLogo, MxmWhite } from '../../../assets';
import './AboutUs.scss';

const useStyles = makeStyles({
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Box
      className="about-us-container"
    >
      <Container maxWidth="lg" className="about-us-inner-container">
        <Box
          className="about-us-first-container"
        >
            <img src={MxmWhite}/>
            <span className="about-us-text">
              MAXIMA atau Malam Expresi Mahasiswa adalah wadah bagi mahasiswa untuk bertumbuh dan berkembang sesuai minat mereka masing-masing di Universitas Multimedia Nusantara. Pada tahun 2020 ini, MAXIMA mengusung tema Odyssey dimana melalui Odyssey, MAXIMA 2020 ingin menemani para mahasiswa/i dalam perjalanannya untuk meraih minat dan bakatnya melalui berbagai macam aktivitas menarik seperti HoME, STATE, dan juga Malam Puncak MAXIMA 2020.
            </span>
        </Box>  
        <hr className="about-us-divider"/>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          paddingTop="2em"
          paddingBottom="2em"
        >
          <h1 className="about-us-text-goal">GOAL OF MAXIMA</h1>
          <Box className="about-us-text-list">
            <ol>
              <li className="about-us-first-list">Memperkenalkan Organisasi, Himpunan, UKM, dan Media Kampus kepada seluruh mahasiswa UMN.</li>
              <li className="about-us-second-list">Mempererat relasi antar mahasiswa dan antara komunitas serta organisasi yang ada di UMN.</li>
              <li className="about-us-third-list">Memperkenalkan nilai-nilai kepemimpinan kepada mahasiswa UMN.</li>
              <li className="about-us-fourth-list">Membangun kesadaran untuk mendalami passion yang dimiliki mahasiswa UMN. </li>
            </ol>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
