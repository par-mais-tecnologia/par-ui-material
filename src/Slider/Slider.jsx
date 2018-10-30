import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import { createMuiTheme, Grid, MuiThemeProvider, Typography } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

import PropTypes from 'prop-types'
import bioFinanceiraTheme from '../BioFinanceiraTheme/BioFinanceiraTheme'

export default class SliderPar extends Component {
  state = {
    sliderValue: this.props.value,
    errors: {
      hasError: false
    }
  }

  validationInstance = this.props.validator ? this.props.validator.validator.register(
    this
  ) : false

  getTheme () {
    return createMuiTheme({
      overrides: {
        MuiSlider: {
          ...bioFinanceiraTheme.overrides.MuiSlider,
          thumb: {
            ...bioFinanceiraTheme.overrides.MuiSlider.thumb,
            border: this.state.errors.hasError ? '1px solid #f44336' : ''
          }
        }
      }
    })
  }

  handleChange (event, value) {
    this.setState({ sliderValue: value })
    if (this.props.onChange) {
      this.props.onChange(event, value)
      return this.validationInstance ? this.validationInstance.validate({ target: { value: value } }, true) : false
    }
  }

  getTypo = (max) => {
    let typos = []
    for (let i = 0; i <= max; i++) {
      typos.push(
        i === 0 ? <Typography key={i} variant='body1' />
          : <Typography
            onClick={(event) => {
              this.handleChange(event, i)
            }}
            style={{ cursor: 'pointer', color: this.state.errors.hasError ? '#f44336' : '' }}
            key={i}
            variant='body1'>
            {i}
          </Typography>
      )
    }
    return typos
  }

  render () {
    const inputProps = {
      onChange: this.handleChange.bind(this)
    }

    if (this.validationInstance) {
      this.state.errors = {
        ...this.validationInstance.error
      }
    } else {
      this.state.errors.hasError = false
    }

    const { errorMessage, required } = this.props
    return (
      <MuiThemeProvider theme={this.getTheme()}>
        <Grid container direction='column'>
          <Slider
            required={required}
            min={0}
            max={this.props.max}
            step={1}
            value={this.state.sliderValue}
            {...inputProps}
          />
          <Grid
            container
            direction='row'
            justify='space-between'
            className='mt3'
            style={{
              margin: '0.2rem 0 0.5rem 0.3rem'
            }}>
            {this.getTypo(this.props.max)}
          </Grid>
          <Grid>
            { this.state.errors.hasError ?
              <FormHelperText error>
                {errorMessage}
              </FormHelperText> : ''}
          </Grid>
        </Grid>
      </MuiThemeProvider>
    )
  }
}

SliderPar.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}
