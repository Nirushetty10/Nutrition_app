import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import NavBar from '../../Components/NavBar/NavBar';
import "./Test.scss"

const steps = [
  "Weight",
  'Waist size',
  "Energy level",
  "Sleep quality",
  'Acidity/Bloating/Indigestion',
  "Sweat cravings",
  "Exercise routines",
  "Mental clarity",
  "Mindset"
];

const Test = () => {
  return (
    <div>
      <NavBar />
      <div className="test_layout">
        <Box sx={{ width: "90%", paddingLeft : 0}}>
          <Stepper activeStep={3} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
    </div>
  );
}

export default Test