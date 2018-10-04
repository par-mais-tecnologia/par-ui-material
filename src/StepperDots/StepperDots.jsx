import React from 'react'

import { MobileStepper, Button, Grid, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

import './styles.css'

const styles = theme => (theme.stepperDotsStyle)

const StepperDots = ({ steps, activeStep, handleNext, handleBack, position, classes }) => (
  <MobileStepper
    steps={steps}
    position={position}
    activeStep={activeStep}
    classes={{
      root: classes.root,
      dot: classes.dot,
      dotActive: classes.dotActive
    }}
    nextButton={
      <Button
        size='small'
        onClick={handleNext}
        disabled={activeStep === steps - 1}
        classes={{
          label: classes.label,
          disabled: classes.disabled
        }}
      >
        <Grid container direction='row' className='mt2 mb2'>
          <Grid item>CONTINUAR</Grid>
          <Grid item id='nextIcon'>
            <i className='white par-icon-arrow-up' />
          </Grid>
        </Grid>
      </Button>
    }
    backButton={
      <Button
        size='small'
        onClick={handleBack}
        disabled={activeStep === 0}
        classes={{
          label: classes.label,
          disabled: classes.disabled
        }}
      >
        <Grid container direction='row' className='mt2 mb2'>
          <Grid item id='backIcon'>
            <i className='white par-icon-arrow-up' />
          </Grid>
          <Grid item>VOLTAR</Grid>
        </Grid>
      </Button>
    }
  />
)

StepperDots.propTypes = {
  steps: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired
}

export default withStyles(styles)(StepperDots)
