import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Box,
  TextField,
  Divider,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';

const originUrl = 'https://mxm20.s3-ap-southeast-1.amazonaws.com';
const cdnUrl = 'https://d1z9g6p5mcoq6s.cloudfront.net';

const AddHomeMedia = () => {
  const { register, handleSubmit, reset, errors } = useForm();
  const [data, setData] = useState([]);

  const onSubmit = async (formData) => {
    reset();
    const newData = {
      home_id: data.find((d) => d.name === formData.name).home_id,
      link_media: formData.link_media.replace(originUrl, cdnUrl),
    };
    try {
      const returnedData = await acaraService.addHomeMedia(newData);
      console.log(returnedData);
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };

  useEffect(() => {
    document.title = 'Tambah HoME Media - MAXIMA 2020';
    const fetchData = async () => {
      try {
        const returnedData = await acaraService.getAllHome();
        setData(returnedData.data);
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

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Add Home Media</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <Autocomplete
            id="home-combo-box"
            options={data}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                name="name"
                label="Pilih Organisator"
                variant="outlined"
                inputRef={register({
                  required: 'Pilih Organisator HoME',
                })}
              />
            )}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="link_media"
            label="Link Media"
            variant="outlined"
            inputRef={register({
              required: 'Isi link media',
            })}
          />
          {errors.link_media && (
            <span>{errors.link_media.message}</span>
          )}
          <Box paddingBottom="2em" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddHomeMedia;
