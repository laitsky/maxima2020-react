import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
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

export default () => {
  const [activeStep, setActiveStep] = useState(0);
  const { register, handleSubmit, reset, errors } = useForm({
    mode: 'onChange',
  });

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StepComponent.SectionOne register={register} />;
      case 1:
        return <StepComponent.SectionTwo register={register} />;
      case 2:
        return <StepComponent.SectionThree register={register} />;
      default:
        return 'Unknown stepIndex';
    }
  }
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

  const onSubmit = async (formData) => {
    reset();
    console.log(formData);
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
              style={{ padding: '1em' }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>

              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Finish
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </div>
        )}
      </form>
    </Box>
  );
};
