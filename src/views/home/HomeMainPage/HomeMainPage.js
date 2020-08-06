import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import { HomeIllus } from '../../../assets';
import { MxmButton } from '../../../components';
import { MxmHomeContainer } from '../../../components/reusable/container';

const useStyles = makeStyles({
  heroTitle: {
    textAlign: 'center',
    fontFamily: 'canaro-bold',
    letterSpacing: 2,
  },
  title: {
    fontSize: '2.5em',
  },
  subtitle: {
    fontSize: '2em',
  },
  homeIllus: {
    height: '320px',
    width: 'auto',
    
    ['@media (max-width: 768px)']: {
      maxWidth: '300px',
      height: 'auto',
    }
  },
});

const HomeMainPage = () => {
  const classes = useStyles();

  return (
    <Box style={{ padding: '2em 0 5em'}}>
      <Container maxWidth="sm">
        <Box className={classes.heroTitle}>
          <div className={`${classes.title} mxm-navy`}>
            SELAMAT DATANG!
          </div>
          <div className={`${classes.subtitle} mxm-pink`}>
            HoME 2020
          </div>
          <img
            className={classes.homeIllus}
            src={HomeIllus}
            alt="Home Illustration"
            title="Home Illustration"
          />
        </Box>
        <Box
          display= "flex"
          flexDirection= "column"
          justifyContent= "center"
          alignItems= "center"
        >
          <MxmHomeContainer>
            <Box 
              display= "flex"
              flexDirection= "column"
              justifyContent= "center"
              alignItems= "flex-start"
              style={{ textAlign: 'justify' }}
            >
              <p>
                Hall of Maxima Exhibition (HoME) merupakan
                pameran dari setiap kegiatan kemahasiswaan yang
                ada di UMN. HoME 2020 adalah tempat para
                mahasiswa baru datang dan mencari tahu <span style={{ backgroundColor: '#41CEBA', borderRadius: '3px', padding: '0 2px 0 2px' }}>informasi
                tentang organisasi</span> yang akan mereka ikuti selama
                berkuliah di Universitas Multimedia Nusantara
                (UMN). HoME menjadi <span style={{ backgroundColor: '#F4224B', borderRadius: '3px', padding: '0 2px 0 2px' }}>“Starting Point”</span> bagi para
                mahasiswa baru untuk mengeksplorasi dan
                menggali informasi sebanyak mungkin mengenai
                Organisasi yang ada di UMN. HoME merupakan
                tempat mahasiswa <span style={{ backgroundColor: '#FFD008', borderRadius: '3px', padding: '0 2px 0 2px' }}>menemukan arah dan jalan</span> yang
                sesuai dengan minat dan kemampuannya.
              </p>
            </Box>
          </MxmHomeContainer>
          <Link to="/home/puzzle">
            <MxmButton>MASUK</MxmButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeMainPage;
