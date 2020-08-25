import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Container,
  Box,
  TextField,
  Divider,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import Swal from 'sweetalert2';
import acaraService from '../../../../../services/acara';
import categories from './categories';

const originUrl = 'https://mxm20.s3-ap-southeast-1.amazonaws.com';
const cdnUrl = 'https://d1z9g6p5mcoq6s.cloudfront.net';
const ytUrl = 'https://youtu.be';
const embedYtUrl = 'https://youtube.com/embed';

const AddHome = () => {
  const history = useHistory();
  const [kategori, setKategori] = useState('');
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    reset();
    const newData = {
      ...data,
      kategori,
      link_logo: data.link_logo.replace(originUrl, cdnUrl),
      link_video: data.link_video.replace(ytUrl, embedYtUrl),
    };
    setKategori('');
    try {
      const returnedStatus = await acaraService.addHome(newData);
      if (returnedStatus === 200) {
        history.push({
          pathname: '/acara/home-lists',
          message: `Kamu berhasil menambahkan data organisator HoME ${data.name}`,
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Perhatian!',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Coba lagi',
      });
    }
  };

  const handleKategoriChange = (e) => {
    setKategori(e.target.value);
  };
  useEffect(() => {
    document.title = 'Tambah Data HoME - MAXIMA 2020';
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <h1>Tambah HoME</h1>
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
          <FormControl variant="outlined">
            <InputLabel htmlFor="kategori-select">
              Kategori
            </InputLabel>
            <Select
              name="kategori"
              label="Kategori"
              inputProps={{
                name: 'kategori',
                id: 'kategori-select',
              }}
              value={kategori || ''}
              onChange={handleKategoriChange}
              inputRef={register}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="narasi"
            label="Narasi Pendek"
            variant="outlined"
            inputRef={register({ required: 'Isi narasi' })}
          />
          {errors.narasi && <span>{errors.narasi.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            multiline
            type="text"
            name="narasi_panjang"
            label="Narasi Panjang"
            variant="outlined"
            rows={10}
            inputRef={register({ required: 'Isi narasi panjang' })}
          />
          {errors.narasi_panjang && (
            <span>{errors.narasi_panjang.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="link_logo"
            label="Link Logo"
            variant="outlined"
            inputRef={register({ required: 'Isi Link Logo' })}
          />
          {errors.link_logo && (
            <span>{errors.link_logo.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="link_video"
            label="Link Video"
            variant="outlined"
            inputRef={register()}
          />
          {errors.link_video && (
            <span>{errors.link_video.message}</span>
          )}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="line"
            label="Media Sosial (LINE)"
            variant="outlined"
            inputRef={register()}
          />
          {errors.line && <span>{errors.line.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="instagram"
            label="Media Sosial (Instagram)"
            variant="outlined"
            inputRef={register()}
          />
          {errors.instagram && (
            <span>{errors.instagram.message}</span>
          )}
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

export default AddHome;
