import React, { PureComponent } from 'react'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

import PropTypes from 'prop-types'

export default class StepperParMais extends PureComponent {
  getTheme() {
    return createMuiTheme({
      overrides: {
        MuiStepIcon: {
          root: {
            color: this.props.inactiveIconColor,
            '&$active': {
              color: this.props.activeIconColor
            },
            '&$completed': {
              color: this.props.completedIconColor
            }
          }
        },
        MuiStepLabel: {
          label: {
            color: this.props.inactiveLabelColor,
            '&$active': {
              color: this.props.activeLabelColor,
            },
            '&$completed': {
              color: this.props.completedLabelColor,
            },
          }
        },
        MuiStepConnector: {
          lineHorizontal: {
            visibility: 'hidden',
          },
        },
        MuiStepper: {
          root: {
            padding: '24px 24px 0px 24px'
          },
        },
        MuiTypography: {
          body1: {
            color: this.props.activeLabelColor,
          }
        }
      },
    })
  }

  render() {
    const {
      steps,
      activeStep,
      orientation,
    } = this.props
    const alternativeLabel = orientation === 'horizontal'

    return (
      <MuiThemeProvider theme={this.getTheme()}>
        <Stepper 
          activeStep={activeStep} 
          orientation={orientation}
          alternativeLabel={alternativeLabel}
        >
          {
            steps.map((label, index)=> {
              return (
                <Step key={label}>
                  <StepLabel>
                    {
                      alternativeLabel
                      ? ''
                      : <p className='stepLabelPPlus'>
                          {label}
                        </p> 
                    }
                  </StepLabel>
                </Step>
              )
            })
          }
        </Stepper>
        { alternativeLabel 
          ? (
            <Typography align='center' noWrap style={{marginTop: '-7px'}}>
              {steps[activeStep]}
            </Typography>
          )
          : ''
        }
      </MuiThemeProvider>
    )
  }
}

StepperParMais.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
  orientation: PropTypes.string.isRequired,
  inactiveIconColor: PropTypes.string,
  activeIconColor: PropTypes.string,
  completedIconColor: PropTypes.string,
  inactiveLabelColor: PropTypes.string,
  activeLabelColor: PropTypes.string,
  completedIconColor: PropTypes.string,
}

StepperParMais.defaultProps = {
  inactiveIconColor: '#C1C1C1',
  activeIconColor: '#5EB8C0',
  completedIconColor: '#B6DDDC',
  inactiveLabelColor: '#C1C1C1',
  activeLabelColor: '#5EB8C0',
  completedIconColor: '#B6DDDC',
}