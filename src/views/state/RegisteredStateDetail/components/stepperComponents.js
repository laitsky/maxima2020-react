import React from 'react';
import { TextField, Box } from '@material-ui/core';

const StepOneForm = ({ register }) => (
  <Box>
    <TextField
      name="nama"
      label="Nama Lengkap"
      variant="filled"
      inputRef={register({ required: true })}
    />
    <TextField
      name="nim"
      label="Nomor Induk Mahasiswa"
      variant="filled"
      inputRef={register({ required: true })}
    />
    <TextField
      name="state_name"
      label="Kegiatan STATE"
      variant="filled"
      inputRef={register({ required: true })}
    />
  </Box>
);

const StepTwoForm = () => (
  <Box>BIKIN DISINI WENNNN (section 2 google form)</Box>
);

export default { StepOneForm, StepTwoForm };
