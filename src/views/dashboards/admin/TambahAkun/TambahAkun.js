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

const TambahAkun = () => {
  const [role, setRole] = useState('');
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    reset();
    const newData = {
      ...data,
      role,
    };
    console.log(newData);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  useEffect(() => {
    document.title = 'Tambah Akun - MAXIMA 2020 Admin';
  });

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
      <Typography variant="h3">Tambah Akun</Typography>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          <TextField
            type="text"
            name="name"
            label="Nama Lengkap"
            variant="outlined"
            inputRef={register({ required: 'Isi nama lengkap' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="number"
            name="nim"
            placeholder="NIM"
            variant="outlined"
            inputRef={register({
              required: 'Isi NIM kamu',
              minLength: {
                value: 5,
                message: 'NIM harus berupa 5 digit',
              },
              maxLength: {
                value: 5,
                message: 'NIM harus berupa 5 digit',
              },
            })}
          />
          {errors.nim && <span>{errors.nim.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="text"
            name="email"
            placeholder="Email"
            variant="outlined"
            inputRef={register({ required: 'Isi Email kamu' })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <Box paddingBottom="2em" />
          <TextField
            type="password"
            name="password"
            placeholder="Kata Sandi"
            variant="outlined"
            inputRef={register({ required: 'Isi kata sandi kamu' })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <Box paddingBottom="2em" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="role-select">Role Akun</InputLabel>
            <Select
              name="role"
              label="role"
              inputProps={{
                name: 'role',
                id: 'role-select',
              }}
              value={role || ''}
              onChange={handleRoleChange}
              inputRef={register}
            >
              <MenuItem value="bph">Badan Pengurus Harian</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="acara">Acara</MenuItem>
              <MenuItem value="maba">Mahasiswa Baru</MenuItem>
              <MenuItem value="ukm">Organisator</MenuItem>
            </Select>
          </FormControl>
          <Box paddingBottom="2em" />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default TambahAkun;
