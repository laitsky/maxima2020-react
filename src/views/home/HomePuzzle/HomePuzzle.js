import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import {
  MxmHomeCard,
  MxmHomeCardDeck,
  MxmHomeDeckItem,
} from '../../../components/reusable/card';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: 'smaller',
  },
});

const HomePuzzle = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="#1F2C4C" minHeight="100vh">
      <MxmHomeCardDeck>
        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/ukm-sains-dan-sosial"
            className={classes.link}
          >
            <MxmHomeCard color="#F4224B" border="#F4224B">
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#FFD008' }}>
                  KOINONIKES
                  <br />
                  EPTIMONIKES
                </h3>
                <a>(UKM Sains & Sosial)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/ukm-seni-dan-budaya"
            className={classes.link}
          >
            <MxmHomeCard>
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#1F2C4C' }}>TECHNI</h3>
                <a>(UKM Seni & Budaya)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/ukm-olahraga"
            className={classes.link}
          >
            <MxmHomeCard>
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#1F2C4C' }}>ATHLIMA</h3>
                <a>(UKM Olahraga)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/kegiatan-kemahasiswaan-dan-lembaga-semi-otonom"
            className={classes.link}
          >
            <MxmHomeCard color="#F4224B" border="#F4224B">
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#FFD008' }}>
                  DRASTIRIO-
                  <br />
                  TITES
                </h3>
                <a>(Kegiatan Kemahasiswaan & Lembaga Semi Otonom)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/media-kampus"
            className={classes.link}
          >
            <MxmHomeCard color="#F4224B" border="#F4224B">
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#FFD008' }}>MESOU</h3>
                <a>(Media Kampus)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/komunitas"
            className={classes.link}
          >
            <MxmHomeCard>
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#1F2C4C' }}>KOINOTITA</h3>
                <a>(Komunitas)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/lembaga-kampus"
            className={classes.link}
          >
            <MxmHomeCard>
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#1F2C4C' }}>LYDRYMA</h3>
                <a>(Lembaga Kampus)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <Link
            to="/home/organisator/organisasi-dan-himpunan-mahasiswa"
            className={classes.link}
          >
            <MxmHomeCard color="#F4224B" border="#F4224B">
              <div>
                <span style={{ color: 'white' }}>ARCHI TOU</span>
                <h3 style={{ color: '#FFD008' }}>ORGANOSI</h3>
                <a>(Organisasi & Himpunan Mahasiswa)</a>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>
      </MxmHomeCardDeck>
    </Box>
  );
};

export default HomePuzzle;
