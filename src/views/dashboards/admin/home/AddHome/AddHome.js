import React, { useState, useEffect } from 'react';
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
  Typography,
} from '@material-ui/core';

const AddHome = () => {
  const [kategori, setKategori] = useState('');
  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = async (data) => {
    reset();
    const newData = {
      ...data,
      kategori,
    };
    console.log(newData);
  };
  const handleKategoriChange = (e) => {
    setKategori(e.target.value);
  };
  useEffect(() => {
    document.title = 'Tambah Data HoME - MAXIMA 2020';
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <Typography variant="h3">Tambah Data HoME</Typography>
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
              <MenuItem value=""> None </MenuItem>
              <MenuItem value="Ten">Ten</MenuItem>
              <MenuItem value="Twenty">Twenty</MenuItem>
              <MenuItem value="Thirty">Thirty</MenuItem>
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
            name="link_audio"
            label="Link Audio"
            variant="outlined"
            inputRef={register({ required: 'Isi Link Audio' })}
          />
          {errors.link_audio && (
            <span>{errors.link_audio.message}</span>
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

export default AddHome;
