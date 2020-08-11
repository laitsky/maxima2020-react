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
import './Shortener.scss';

const withHttp = (url) =>
  !/^https?:\/\//i.test(url) ? `http://${url}` : url;

const Shortener = () => {
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
      <AlignMiddle>
        <MxmLogoContainer
          src={MxmLogoText}
          style={{ marginTop: '5em' }}
        />
        <h1
          style={{ fontFamily: 'canaro-bold', letterSpacing: 2 }}
          className="mxm-pink"
        >
          MAXIMA URL SHORTENER
        </h1>
      </AlignMiddle>
      <Box display="flex" placeItems="center">
        <Container maxWidth="md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <MxmInput
              placeholder="Masukkan URL kamu"
              name="url"
              ref={register({ required: 'Isi URL kamu!' })}
            />
            {errors.url && <Error>{errors.url.message}</Error>}
            <MxmButton>Submit</MxmButton>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Shortener;
