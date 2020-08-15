import React, { useState } from 'react';
import { Box, Container } from '@material-ui/core';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@material-ui/core';
import StepComponent from './stepComponents';
import './Survei.scss';

function getSteps() {
  return [
    'Survei Pelaksanaan STATE 2020',
    'Survei Kepuasan STATE 2020',
    'Kritik dan Saran',
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <StepComponent.SectionOne />;
    case 1:
      return <StepComponent.SectionTwo />;
    case 2:
      return <StepComponent.SectionThree />;
    default:
      return 'Unknown stepIndex';
  }
}

export default () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography>{getStepContent(activeStep)}</Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ padding: '1em'}}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </div>
        )}
      </div>
    </Box>
  );
};
