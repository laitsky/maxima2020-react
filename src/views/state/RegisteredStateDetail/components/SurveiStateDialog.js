import React, { useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@material-ui/core';
import FormStepper from './stepperComponents';

const getSteps = () => ['Step 1', 'Step 2', 'Step 3'];

export default ({
  openSurveiDialog,
  handleSurveiClose,
  register,
}) => {
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FormStepper.StepOneForm register={register} />;
      case 1:
        return <FormStepper.StepTwoForm />;
      case 2:
        return 'Ini adalah halaman stepper 3';
      default:
        return 'Step 0???';
    }
  };
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
    <Dialog open={openSurveiDialog} onClose={handleSurveiClose}>
      <DialogTitle id="survei-dialog-title">Survei STATE</DialogTitle>
      <DialogContent>
        <form>
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
                <div>
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
                    {activeStep === steps.length - 1
                      ? 'Finish'
                      : 'Next'}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSurveiClose} color="primary">
          Tutup
        </Button>
        <Button variant="outlined" color="secondary">
          Kirim
        </Button>
      </DialogActions>
    </Dialog>
  );
};
