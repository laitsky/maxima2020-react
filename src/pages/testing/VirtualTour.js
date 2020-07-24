import React from 'react';
import { Container, Box } from '@material-ui/core';
import { Pannellum } from 'pannellum-react';
import testPhoto from '../../assets/360_home_gate.png';

const VirtualTour = () => (
  <Container maxWidth="xl">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Pannellum
        width="85%"
        height="80vh"
        image={testPhoto}
        pitch={10}
        yaw={100}
        hfov={110}
        autoLoad
        previewTitle="Test title"
      />
    </Box>
  </Container>
);

export default VirtualTour;
