import React, { useState, useEffect } from 'react';
import { Container, Box } from '@material-ui/core';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { MxmCancelButton } from '../../../components/reusable/button';
import homeHelpers from '../homeHelpers';
import publicService from '../../../services/public';
import './HomeLists.scss';

const useStyles = makeStyles({
  cancelButton: {
    margin: '1em',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  istilah: {
    color: '#F4224B',
    margin: '0.2em',

    '@media (max-width: 766px)': {
      margin: 0,
    },
  },
});

const HomeLists = () => {
  const classes = useStyles();
  const { kategori } = useParams();
  const [data, setData] = useState([]);
  const match = homeHelpers.homeMatchParams.find(
    (d) => d.params === kategori,
  );

  useEffect(() => {
    document.title = `Daftar Organisator HoME 2020 - ${kategori
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')}`;

    const fetchData = async () => {
      try {
        let returnedData = await publicService.getAllHome();
        returnedData = returnedData.filter(
          (d) => d.kategori === match.kategori,
        );
        setData(returnedData);
      } catch (error) {
        Swal.fire({
          title: 'Perhatian!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Container
        maxWidth="md"
        style={{ padding: '18px 10px 18px 10px' }}
      >
        <h1 className="homelist-architou">
          Archi Tou
          <br className="homelist-separator" />
          <span className={classes.istilah}>{match.istilah}</span>
        </h1>
        <h2 className="homelist-architoudesc">{match.kategori}</h2>

        {data.map((d) => (
          <div key={d.home_id}>
            <Box className="homelist-middle">
              <Box className="homelist-image">
                <Link
                  className={classes.link}
                  to={`/home/detail-organisator/${d.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                >
                  <img
                    className="homelist-logo"
                    src={d.link_logo}
                    alt={`Logo ${d.name}`}
                    title={`Logo ${d.name}`}
                  />
                </Link>
              </Box>
              <Box className="homelist-desc">
                <Link
                  className={classes.link}
                  to={`/home/detail-organisator/${d.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')}`}
                >
                  <span className="homelist-title">{d.name}</span>
                  <h3 className="homelist-narasi">{d.narasi}</h3>
                </Link>
              </Box>
            </Box>
          </div>
        ))}
        <Box className="homelist-middle">
          <Link to="/home/puzzle">
            <MxmCancelButton
              className={classes.cancelButton}
              type="button"
            >
              Kembali ke puzzle
            </MxmCancelButton>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default HomeLists;
