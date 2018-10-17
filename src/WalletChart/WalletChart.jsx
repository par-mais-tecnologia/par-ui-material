import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generate } from 'c3'
import { select } from 'd3'
import 'c3/c3.css'
import { Grid } from '../index'
import { getStrategiesColors, getStrategies } from './functions'
import LegendChart from '../LegendChart'

class WalletChart extends Component {
  generateChart (wallet) {
    return generate({
      bindto: '#wallet-chart',
      size: {
        width: 240
      },
      data: {
        columns: getStrategies(this.props.initialInvestment, wallet),
        type: 'donut',
        colors: getStrategiesColors()
      },
      donut: {
        width: 33,
        label: {
          show: false
        }
      },
      legend: {
        show: false
      }

    })
  };

  getChartCustomStyles () {
    const {
      labelFirstLine,
      labelSecondLine
    } = this.props
    const labelChart = select('text.c3-chart-arcs-title')
    labelChart.html('')
    labelChart.insert('tspan').text(labelFirstLine).attr('dy', 0).attr('x', 0).style('font-family', 'sans-serif')
    labelChart.insert('tspan').text(labelSecondLine).attr('dy', 15).attr('x', 0).style('font-family', 'sans-serif')
    labelChart.style('dominant-baseline', 'auto')
    labelChart.style('fill', '#a0a0a0')
  };

  componentDidMount () {
    this.generateChart(this.props.wallet)
    this.getChartCustomStyles()
  }

  componentDidUpdate () {
    this.generateChart(this.props.wallet)
    this.getChartCustomStyles()
  }

  render () {
    const { initialInvestment, wallet, legend } = this.props

    const strategies = getStrategies(initialInvestment, wallet)

    return (
      <Grid container direction='row' alignItems='center'>
        <Grid>
          <Grid id='wallet-chart' />
        </Grid>
        <Grid>
          {legend && <Grid>
            <LegendChart initialInvestment={initialInvestment} strategies={strategies} />
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
