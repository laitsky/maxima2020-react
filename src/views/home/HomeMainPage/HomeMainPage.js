import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { Container, Box } from '@material-ui/core';
import { HomeIllus } from '../../../assets';
import { MxmButton } from '../../../components';
import { MxmHomeContainer } from '../../../components/reusable/container';
import './HomeMainPage.scss';

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

    '@media (max-width: 768px)': {
      maxWidth: '300px',
      height: 'auto',
    },
  },
});

const HomeMainPage = () => {
  const classes = useStyles();

  return (
    <motion.div
      initial={{ y: -999 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      <div id="home_main_page-header">
        <Box style={{ padding: '2em 0 5em' }}>
          <Container maxWidth="sm">
            <Box className={classes.heroTitle}>
              <motion.div
                initial={{ y: -999 }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 0.8,
                }}
              >
                <div className={`${classes.title} mxm-navy`}>
                  SELAMAT DATANG!
                </div>
                <div className={`${classes.subtitle} mxm-pink`}>
                  HoME 2020
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 50,
                  damping: 20,
                  delay: 0.4,
                }}
              >
                <img
                  className={classes.homeIllus}
                  src={HomeIllus}
                  alt="Home Illustration"
                  title="Home Illustration"
                />
              </motion.div>
            </Box>
            <motion.div
              initial={{ y: 999, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.8,
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <MxmHomeContainer>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    style={{ textAlign: 'center' }}
                  >
                    <p>
                      Hall of Maxima Exhibition (HoME) merupakan
                      pameran dari setiap kegiatan kemahasiswaan yang
                      ada di UMN. HoME 2020 adalah tempat para
                      mahasiswa baru datang dan mencari tahu{' '}
                      <span
                        style={{
                          backgroundColor: '#41CEBA',
                          borderRadius: '3px',
                          padding: '0 2px 0 2px',
                        }}
                      >
                        informasi tentang organisasi
                      </span>{' '}
                      yang akan mereka ikuti selama berkuliah di
                      Universitas Multimedia Nusantara (UMN). HoME
                      menjadi{' '}
                      <span
                        style={{
                          backgroundColor: '#F4224B',
                          borderRadius: '3px',
                          padding: '0 2px 0 2px',
                        }}
                      >
                        “Starting Point”
                      </span>{' '}
                      bagi para mahasiswa baru untuk mengeksplorasi
                      dan menggali informasi sebanyak mungkin mengenai
                      Organisasi yang ada di UMN. HoME merupakan
                      tempat mahasiswa{' '}
                      <span
                        style={{
                          backgroundColor: '#FFD008',
                          borderRadius: '3px',
                          padding: '0 2px 0 2px',
                        }}
                      >
                        menemukan arah dan jalan
                      </span>{' '}
                      yang sesuai dengan minat dan kemampuannya.
                    </p>
                  </Box>
                </MxmHomeContainer>
                <Link to="/home/puzzle">
                  <MxmButton>MASUK</MxmButton>
                </Link>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </div>
    </motion.div>
  );
};

export default HomeMainPage;
