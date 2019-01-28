import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

import { Grid, Typography } from '../index'
import { getCurrencyFormat, formatPercent } from '../Core/masks'

const styles = (theme) => ({
  patrimony: theme.patrimonyResultChart ? theme.patrimonyResultChart : {}
})

function PatrimonyResultChart (props) {
  const createObjects = (investments, realState, movableAssets, props) => {
    const total = investments + realState + movableAssets

    const percentinv = Number(((investments / total) * 100).toFixed(1)) || 0
    const percentreal = Number(((realState / total) * 100).toFixed(1)) || 0
    const percentmov = Number(((movableAssets / total) * 100).toFixed(1)) || 0

    const inv = {
      amount: getCurrencyFormat(investments, 'R$', 0, ' '),
      desc: 'Investimentos',
      percentage: `${formatPercent(percentinv)}`,
      backgroundColor: props.investmentColor,
      class: 'investment'
    }
    const rs = {
      amount: getCurrencyFormat(realState, 'R$', 0, ' '),
      desc: 'Imóveis',
      percentage: `${formatPercent(percentreal)}`,
      backgroundColor: props.realStateColor,
      class: 'realstate'
    }
    const ma = {
      amount: getCurrencyFormat(movableAssets, 'R$', 0, ' '),
      desc: 'Outros bens',
      percentage: `${formatPercent(percentmov)}`,
      backgroundColor: props.movableAssetsColor,
      class: 'movable'
    }

    return [inv, rs, ma]
  }

  const investmentChart = (classes, property, key) => {
    return (
      <Grid key={key} className={`flex flex-row mb4 ${classes.patrimony}`}>
        <Grid className='flex flex-column' style={{ minWidth: 150 }}>
          <Typography
            variant='body1'
            className={`display4 onHover ${property.class}`}>
            {property.amount}
          </Typography>
          <Typography
            variant='body1'
            className={`onHover ${property.class}`}>
            {property.desc}
          </Typography>
          <Typography
            variant='body1'
            className={`percentage onHover ${property.class}`}>
            {String(property.percentage).replace(/\./, ',')}
          </Typography>
        </Grid>
        <Grid className='flex w-100' style={{ paddingLeft: 8 }}>
          <Grid
            className='bar'
            style={{
              width: property.percentage,
              backgroundColor: property.backgroundColor
            }}
          />
        </Grid>
      </Grid>
    )
  }

  const { classes, investments, realState, movableAssets } = props
  const patrimonies = createObjects(investments, realState, movableAssets, props)

  return (
    <div className='flex flex-column'>
      {patrimonies.map(inv => investmentChart(classes, inv, Math.floor(Math.random() * 6530)))}
    </div>
  )
}

PatrimonyResultChart.propTypes = {
  investments: PropTypes.number.isRequired,
  realState: PropTypes.number.isRequired,
  movableAssets: PropTypes.number.isRequired,
  investmentColor: PropTypes.string.isRequired,
  realStateColor: PropTypes.string.isRequired,
  movableAssetsColor: PropTypes.string.isRequired
}

export default withStyles(styles)(PatrimonyResultChart)
