import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Box,
  TextField,
  Divider,
  Button,
  Radio,
} from '@material-ui/core';
import adminService from '../../../../../services/admin';
import Snackbar from '@material-ui/core/Snackbar';

const TambahState = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    reset();
    console.log(data);
    try {
      const returnedData = await adminService.addState(data);
      console.log(returnedData);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    document.title = 'Tambah Data STATE - MAXIMA 2020';
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Tambah STATE</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            type="text"
            name="name"
            label="Nama Organisator"
            variant="outlined"
            inputRef={register({
              required: 'Isi nama organisator',
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="number"
            name="quota"
            label="Kuota"
            variant="outlined"
            inputRef={register({
              required: 'Isi kuota',
            })}
          />
          {errors.quota && <span>{errors.quota.message}</span>}
          <Box paddingBottom="2em" />
          <Box>
            Hari ke-
            <br />
            <Radio
              name="day"
              value="1"
              inputRef={register({
                required: 'Kamu harus memilih hari!',
              })}
            />
            1
            <Radio
              name="day"
              value="2"
              inputRef={register({
                required: 'Kamu harus memilih hari!',
              })}
            />
            2
            <Radio
              name="day"
              value="3"
              inputRef={register({
                required: 'Kamu harus memilih hari!',
              })}
            />
            3
            <Radio
              name="day"
              value="4"
              inputRef={register({
                required: 'Kamu harus memilih hari!',
              })}
            />
            4{errors.day && <span>{errors.day.message}</span>}
          </Box>
          <Box paddingBottom="2em" />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Box paddingBottom="2em" />
        </Box>
      </form>
    </Container>
  );
};

export default TambahState;
