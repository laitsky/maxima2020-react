import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Box,
  Paper,
  TextField,
  Divider,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
}));

const AddHome = () => {
  const [kategori, setKategori] = useState('');
  const { register, handleSubmit, reset, errors, control } = useForm({
    mode: 'onChange',
  });
  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };
  const handleKategoriChange = (e) => {
    setKategori(e.target.value);
  };
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Add HoME - MAXIMA 2020';
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root} elevation={3}>
        <h1>Add HoME Panel</h1>
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
              <Controller
                control={control}
                name="kategori"
                as={(
                  <Select
                    name="kategori"
                    label="Kategori"
                    inputProps={{
                      name: 'kategori',
                      id: 'kategori-select',
                    }}
                    value={kategori || ''}
                    onChange={handleKategoriChange}
                    inputRef={register({
                      required: 'Pilih kategori',
                    })}
                  >
                    <MenuItem value=""> None </MenuItem>
                    <MenuItem value="Ten">Ten</MenuItem>
                    <MenuItem value="Twenty">Twenty</MenuItem>
                    <MenuItem value="Thirty">Thirty</MenuItem>
                  </Select>
                )}
              />
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
            <Button type="submit" variant="outlined" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddHome;
