import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Donut } from '../index'
import { getStrategiesColors, getStrategies } from './functions'
import LegendChart from '../LegendChart'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  legendChartContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up(700)]: {
      marginLeft: '4rem',
      marginTop: 0,
      width: 'auto',
      display: 'block'
    }
  }
})

class WalletChart extends Component {
  render () {
    const { classes, initialInvestment, wallet, legend, showLegendPercentage, labelFirstLine, labelSecondLine, identication } = this.props
    const strategies = getStrategies(initialInvestment, wallet)

    return (
      <Grid container direction='row' alignItems='center' justify='center'>
        <Donut
          columns={getStrategies(initialInvestment, wallet)}
          colors={getStrategiesColors()}
          labelFirstLine={labelFirstLine}
          labelSecondLine={labelSecondLine}
          identication={identication}
        />
        <Grid className={classes.legendChartContainer}>
          {legend && <Grid>
            <LegendChart initialInvestment={initialInvestment} strategies={strategies} showPercentage={showLegendPercentage} />
          </Grid>}
        </Grid>
      </Grid>
    )
  }
}

WalletChart.propTypes = {
  classes: PropTypes.object.isRequired,
  initialInvestment: PropTypes.number,
  labelFirstLine: PropTypes.string,
  labelSecondLine: PropTypes.string,
  wallet: PropTypes.arrayOf(PropTypes.object),
  legend: PropTypes.bool
}

WalletChart.defaultProps = {
  legend: true,
  labelFirstLine: '',
  labelSecondLine: ''
}

export default withStyles(styles)(WalletChart)
