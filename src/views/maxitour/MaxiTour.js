/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Container, Box } from '@material-ui/core';
import useStyles from './helpers/useStyles';
import MaxiTourTabs from './components/MaxiTourTabs';
import MaxiTourItems from './components/MaxiTourItems';

const MaxiTour = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <MaxiTourTabs value={value} handleChange={handleChange} />
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1 className="mxm-pink">
            MAXIMA 360 Tour (testing environment)
          </h1>
          <MaxiTourItems value={value} />
        </Box>
      </Container>
    </div>
  );
};

export default MaxiTour;
