import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider'
import { Grid, Typography } from '@material-ui/core/es'

import PropTypes from 'prop-types'

export default class SliderPar extends Component {
  getTypo = (max) => {
    let typos = []
    for (let i = 1; i <= max; i++) {
      typos.push(<Typography variant='body2'>{i}</Typography>)
    }
    return typos
  }

  render () {
    return (
      <Grid container direction='column'>
        <Slider
          min={1}
          max={this.props.max}
          step={1}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
        <Grid container direction='row' justify='space-between'>
          {this.getTypo(this.props.max)}
        </Grid>
      </Grid>
    )
  }
}

SliderPar.propTypes = {
  max: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}
