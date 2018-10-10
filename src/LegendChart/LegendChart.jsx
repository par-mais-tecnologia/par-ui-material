import React, { Component } from 'react'
import { getStrategiesData, getStrategieColorLegend, formatPercent } from '../WalletChart/functions'
import { Grid, Typography } from '../index'

class LegendChart extends Component {
  render () {
    const { strategies, initialInvestment } = this.props
    let strategiesWithValues = strategies.filter(item => item[1] > 0)
    const strategiesSummary = getStrategiesData(strategiesWithValues, initialInvestment)

    return (
      <Grid container direction='column'>
        {strategiesSummary.map(strategy => {
          return (
            <Grid container direction='column' className='mb3 ml3' key={strategy.name}>
              <Grid container direction='row' alignItems='center'>
                <Grid className='mr2' style={{ backgroundColor: getStrategieColorLegend(strategy.name), width: 15, height: 15 }} />
                <Grid>
                  <Typography>
                    {formatPercent(Number(strategy.percentual).toFixed(1))}%
                  </Typography>
                </Grid>
              </Grid>
              <Grid style={{ color: getStrategieColorLegend(strategy.name) }} className='roboto-medium'>
                {strategy.name}
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    )
  }
}

export default LegendChart
