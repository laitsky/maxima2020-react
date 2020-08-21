import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';
import {
  MxmLogoContainer,
  MxmInput,
  MxmButton,
  Error,
  MxmLongCard,
  MxmLoading,
} from '../../components';
import { MxmLogoText } from '../../assets';
import shortenerService from '../../services/shortener';
import './Shortener.scss';

const withHttp = (url) =>
  !/^https?:\/\//i.test(url) ? `http://${url}` : url;

const useStyles = makeStyles({
  separator: {
    display: 'none',
    '@media(max-width:766px)': {
      display: 'block',
    },
  },
  textArea: {
    backgroundColor: 'transparent',
    fontFamily: 'canaro-bold',
  },
});

const Shortener = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (formData) => {
    setLoading(true);
    reset();
    // eslint-disable-next-line no-param-reassign
    formData.url = withHttp(formData.url);
    try {
      const returnedData = await shortenerService.create(formData);
      setData(returnedData);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`mxm.one/${data.short_url}`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="shortener-container">
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ textAlign: 'center' }}
        >
          <MxmLogoContainer
            src={MxmLogoText}
            style={{ marginTop: '5em' }}
          />
          <h1
            style={{
              fontFamily: 'canaro-bold',
              letterSpacing: 2,
              margin: 0,
            }}
            className="mxm-pink"
          >
            MAXIMA URL
            <br className={classes.separator} /> SHORTENER
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: '100%' }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <MxmInput
                placeholder="Masukkan URL kamu"
                name="url"
                ref={register({ required: 'Isi URL kamu!' })}
              />
              {errors.url && <Error>{errors.url.message}</Error>}
              <br />
              {loading ? (
                <MxmLoading />
              ) : (
                <MxmButton>Submit</MxmButton>
              )}
            </Box>
          </form>
          {data.short_url && (
            <>
              <MxmLongCard onClick={copyToClipboard}>
                mxm.one/{data.short_url}
              </MxmLongCard>
              <h4
                className="mxm-pink"
                style={{
                  fontFamily: 'canaro-light',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                Tekan kotak untuk menyalin
              </h4>
            </>
          )}
        </Box>
        <h5
          style={{
            paddingTop: '3em',
            textAlign: 'center',
            color: '#41ceba',
            letterSpacing: 2.5,
            textTransform: 'uppercase',
          }}
        >
          <a
            href="https://maxima.umn.ac.id"
            style={{ textDecoration: 'none', color: '#41ceba' }}
          >
            Kembali ke maxima.umn.ac.id
          </a>
        </h5>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Berhasil menyalin{' '}
          <span style={{ fontWeight: 'bold' }}>
            <a
              href={`https://mxm.one/${data.short_url}`}
              style={{ color: 'green' }}
            >
              mxm.one/{data.short_url}
            </a>
          </span>{' '}
          ke
          <span style={{ fontStyle: 'italic' }}> clipboard</span>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Shortener;
