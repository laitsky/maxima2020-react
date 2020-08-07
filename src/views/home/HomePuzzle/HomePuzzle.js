import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box, Container } from '@material-ui/core';
import { MxmHomeCard, MxmHomeCardDeck, MxmHomeDeckItem } from '../../../components/reusable/card';

const useStyles = makeStyles({
  link:{
    textDecoration: 'none',
    color: 'white',
    fontSize: 'smaller',

    '&:hover':{
      textDecoration: 'underline',
      color: '#1F2C4C',
    }
  },
});

const HomePuzzle = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="#1F2C4C" minHeight="100vh">
      <MxmHomeCardDeck>
        <MxmHomeDeckItem>
          <MxmHomeCard color="#F4224B" border="#F4224B">
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#FFD008' }}>KOINONIKES<br></br>EPTIMONIKES</h3>
              <Link to="/home/organisator/sains-dan-sosial" className={classes.link}>
                <a>(Sains & Sosial)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard>
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#1F2C4C' }}>TECHNI</h3>
              <Link to="/home/organisator/seni-dan-budaya" className={classes.link}>
                <a>(Seni & Budaya)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard>
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#1F2C4C' }}>ATHLIMA</h3>
              <Link to="/home/organisator/olahraga" className={classes.link}>
                <a>(Olahraga)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard  color="#F4224B" border="#F4224B">
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#FFD008' }}>DRASTIRIO-<br></br>TITES</h3>
              <Link to="/home/organisator/mahasiswa-dan-lso" className={classes.link}>
                <a>(Mahasiswa & LSO)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard color="#F4224B" border="#F4224B">
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#FFD008' }}>TECHNI</h3>
              <Link to="/home/organisator/media-kampus" className={classes.link}>
                <a>(Media Kampus)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard>
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#1F2C4C' }}>TECHNI</h3>
              <Link to="/home/organisator/komunitas" className={classes.link}>
                <a>(Komunitas)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard>
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#1F2C4C' }}>TECHNI</h3>
              <Link to="/home/organisator/lembaga-kampus" className={classes.link}>
                <a>(Lembaga Kampus)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>

        <MxmHomeDeckItem>
          <MxmHomeCard color="#F4224B" border="#F4224B">
            <div>
              <a style={{ color: 'white' }}>ARCHI TOU</a>
              <h3 style={{ color: '#FFD008' }}>TECHNI</h3>
              <Link to="/home/organisator/organisasi-dan-himpunan" className={classes.link}>
                <a>(Organisasi & Himpunan)</a>
              </Link>
            </div>
          </MxmHomeCard>
        </MxmHomeDeckItem>
      </MxmHomeCardDeck>
    </Box>
  );
};

export default HomePuzzle;
