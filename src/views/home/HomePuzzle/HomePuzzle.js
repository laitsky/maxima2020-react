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
    <Box bgcolor="#1F2C4C" minHeight="100vh" paddingLeft="20px" paddingRight="20px">
      <h1
        className="mxm-yellow"
        style={{
          fontFamily: 'canaro-bold',
          letterSpacing: 1.5,
          textAlign: 'center',
          paddingTop: '1.5em',
          margin: 0,
        }}
      >
        Pilih kategori organisasi yang ingin kamu cari.
      </h1>
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
                <span>(UKM Sains & Sosial)</span>
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
                <span>(UKM Seni & Budaya)</span>
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
                <span>(UKM Olahraga)</span>
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
                <span>
                  (Kegiatan Kemahasiswaan & Lembaga Semi Otonom)
                </span>
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
                <span>(Media Kampus)</span>
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
                <span>(Komunitas)</span>
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
                <span>(Lembaga Kampus)</span>
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
                <span>(Organisasi & Himpunan Mahasiswa)</span>
              </div>
            </MxmHomeCard>
          </Link>
        </MxmHomeDeckItem>
      </MxmHomeCardDeck>
    </Box>
  );
};

export default HomePuzzle;
