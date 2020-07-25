import React from 'react';
import { Container, Box } from '@material-ui/core';
import { Pannellum } from 'pannellum-react';
import maxitourService from '../../services/maxitour';

const VirtualTour = () => (
  <Container maxWidth="xl">
    <h1 className="mxm-pink">MAXIMA 360 Tour (testing only)</h1>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Pannellum
        width="82vw"
        height="77vh"
        image={maxitourService.gate}
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
