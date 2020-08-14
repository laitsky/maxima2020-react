import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {
  AlignMiddle,
  MxmLogoContainer,
  MxmInput,
  MxmButton,
  Error,
} from '../../components';
import { MxmLogoText } from '../../assets';
import shortenerService from '../../services/shortener';
import { makeStyles } from '@material-ui/core/styles';
import './Shortener.scss';

const withHttp = (url) =>
  !/^https?:\/\//i.test(url) ? `http://${url}` : url;

const useStyles = makeStyles({
  separator:{
    display: 'none',
    '@media(max-width:766px)':{
      display: 'block',
    },
  }
});

const Shortener = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    reset();
    // eslint-disable-next-line no-param-reassign
    data.url = withHttp(data.url);
    console.log(data);
    try {
      const returnedData = await shortenerService.create(data);
      console.log(returnedData);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div id="shortener-container">
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
            style={{ fontFamily: 'canaro-bold', letterSpacing: 2, margin: 0 }}
            className="mxm-pink"
          >
            MAXIMA URL<br className={classes.separator}/> SHORTENER
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>  
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
              <br/>
              <MxmButton>Submit</MxmButton>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Shortener;
