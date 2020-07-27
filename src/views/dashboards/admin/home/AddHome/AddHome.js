import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  TextField,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2em',
  },
}));

const AddHome = () => {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Add HoME - MAXIMA 2020';
  }, []);

  return (
    <Container>
      <Paper className={classes.root} elevation={3}>
        <h1>Add HoME Panel</h1>
        <Divider style={{ marginBottom: '1.5em' }} />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </Paper>
    </Container>
  );
};

export default AddHome;
