import React from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { AlignMiddle } from '../../components/reusable/container';

const Shortener = () => {
  const test = '';
  return (
    <Container>
      <form>
        <AlignMiddle>
          <TextField label="Masukkan situs" variant="outlined" color="secondary" />
          <Button variant="contained" color="primary">Perpendek URL!</Button>
        </AlignMiddle>
      </form>
    </Container>
  );
};

export default Shortener;
