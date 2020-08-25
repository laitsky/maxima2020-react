import React from 'react';
import { Container, Box } from '@material-ui/core';
import { motion } from 'framer-motion';
import { MxmWhite } from '../../../assets';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <Box className="about-us-container">
      <Container maxWidth="lg" className="about-us-inner-container">
        <Box className="about-us-first-container">
          <motion.div
            initial={{ y: -999, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
          >
            <img src={MxmWhite} alt="Logo MAXIMA" />
          </motion.div>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
            style={{ textAlign: 'justify' }}
          >
            <span className="about-us-text">
              MAXIMA atau Malam Expresi Mahasiswa adalah wadah bagi
              mahasiswa untuk bertumbuh dan berkembang sesuai minat
              mereka masing-masing di Universitas Multimedia
              Nusantara. Pada tahun 2020 ini, MAXIMA mengusung tema
              Odyssey dimana melalui Odyssey, MAXIMA 2020 ingin
              menemani para mahasiswa/i dalam perjalanannya untuk
              meraih minat dan bakatnya melalui berbagai macam
              aktivitas menarik seperti HoME, STATE, dan juga Malam
              Puncak MAXIMA 2020.
            </span>
          </motion.div>
        </Box>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 20,
            damping: 30,
          }}
        >
          <hr className="about-us-divider" />
        </motion.div>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          paddingTop="2em"
          paddingBottom="2em"
        >
          <span className="about-us-text-goal">
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.6,
              }}
            >
              G
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.8,
              }}
            >
              O
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1,
              }}
            >
              A
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1.2,
              }}
            >
              L O
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1.4,
              }}
            >
              F M
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1.6,
              }}
            >
              A
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 1.8,
              }}
            >
              X
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 2,
              }}
            >
              I
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 2.2,
              }}
            >
              M
            </motion.div>
            <motion.div
              initial={{ y: -99, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 2.4,
              }}
            >
              A
            </motion.div>
          </span>

          <Box className="about-us-text-list">
            <ol>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 2,
                }}
              >
                <li className="about-us-first-list">
                  Memperkenalkan Organisasi, Himpunan, UKM, dan Media
                  Kampus kepada seluruh mahasiswa UMN.
                </li>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 2.3,
                }}
              >
                <li className="about-us-second-list">
                  Mempererat relasi antar mahasiswa dan antara
                  komunitas serta organisasi yang ada di UMN.
                </li>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 2.7,
                }}
              >
                <li className="about-us-third-list">
                  Memperkenalkan nilai-nilai kepemimpinan kepada
                  mahasiswa UMN.
                </li>
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                  delay: 3,
                }}
              >
                <li className="about-us-fourth-list">
                  Membangun kesadaran untuk mendalami passion yang
                  dimiliki mahasiswa UMN.{' '}
                </li>
              </motion.div>
            </ol>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
