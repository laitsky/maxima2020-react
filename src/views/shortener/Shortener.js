import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, TextField, Button } from '@material-ui/core';
import { AlignMiddle } from '../../components/reusable/container';
import shortenerService from '../../services/shortener';

const Shortener = () => {
  const [notification, setNotification] = useState(null);
  const {
    register, handleSubmit, errors, reset,
  } = useForm();
  const onSubmit = async (data) => {
    setNotification(null);
    reset();
    try {
      const result = await shortenerService.create(data);
      setNotification(result.short_url);
    } catch (ex) {
      setNotification(ex.response.data.error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AlignMiddle>
          <TextField
            name="url"
            label="URL"
            variant="outlined"
            inputRef={register({ required: 'URL harus diisi!' })}
          />
          {errors.url && <span>{errors.url.message}</span>}
          <h4 style={{ color: 'red' }}>{notification}</h4>
          <Button type="submit" variant="contained" color="primary">
            Primary
          </Button>
        </AlignMiddle>
      </form>
    </Container>
  );
};

export default Shortener;
