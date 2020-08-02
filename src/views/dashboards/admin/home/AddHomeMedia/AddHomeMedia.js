import React, { useEffect } from 'react';
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

const AddHomeMedia = () => {
  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    reset();
    console.log(data);
  };

  useEffect(() => {
    document.title = 'Tambah HoME Media - MAXIMA 2020';
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2em' }}>
        <h1>Add Home Media</h1>
      <Divider style={{ marginBottom: '1.5em' }} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
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
        </Box>
      </form>
    </Container>
  );
};

export default AddHomeMedia;
