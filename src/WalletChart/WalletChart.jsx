import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Donut } from '../index'
import { getStrategiesColors, getStrategies } from './functions'
import LegendChart from '../LegendChart'

class WalletChart extends Component {
  render () {
    const { initialInvestment, wallet, legend, showLegendPercentage, labelFirstLine, labelSecondLine } = this.props

    const strategies = getStrategies(initialInvestment, wallet)

    return (
      <Grid container direction='row' alignItems='center' justify='center'>
        <Donut
          columns={getStrategies(this.props.initialInvestment, wallet)}
          colors={getStrategiesColors()}
          labelFirstLine={labelFirstLine}
          labelSecondLine={labelSecondLine} />
        <Grid className='flex db-ns w-100 w-auto-ns justify-center justify-left-ns ml0 ml5-ns'>
          {legend && <Grid className>
            <LegendChart initialInvestment={initialInvestment} strategies={strategies} showPercentage={showLegendPercentage} />
          </Grid>}
        </Grid>
      </Grid>
    )
  }
}

WalletChart.propTypes = {
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

export default WalletChart
