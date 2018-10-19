import React from 'react'
import Grid from '@material-ui/core/Grid'

import { Typography, withStyles } from '@material-ui/core'
import { getCurrencyFormat } from '../Core/masks'

import PropTypes from 'prop-types'

const styles = (theme) => ({
  patrimony: theme.patrimonyResultChart ? theme.patrimonyResultChart : {}
})

function PatrimonyResultChart (props) {
  const createObjects = (investments, realState, movableAssets, props) => {
    const total = investments + realState + movableAssets

    const percentinv = Number(((investments / total) * 100).toFixed(1))
    const percentreal = Number(((realState / total) * 100).toFixed(1))
    const percentmov = Number(((movableAssets / total) * 100).toFixed(1))

    const inv = {
      amount: `R$ ${getCurrencyFormat(investments)}`,
      desc: 'Investimentos',
      percentage: `${percentinv}%`,
      backgroundColor: props.investmentColor,
      class: 'investment'
    }
    const rs = {
      amount: `R$ ${getCurrencyFormat(realState)}`,
      desc: 'Imóveis',
      percentage: `${percentreal}%`,
      backgroundColor: props.realStateColor,
      class: 'realstate'
    }
    const ma = {
      amount: `R$ ${getCurrencyFormat(movableAssets)}`,
      desc: 'Outros bens',
      percentage: `${percentmov}%`,
      backgroundColor: props.movableAssetsColor,
      class: 'movable'
    }

    return [inv, rs, ma]
  }

  const investmentChart = (classes, property, key) => {
    return (
      <Grid key={key} container direction='row' className={classes.patrimony}>
        <Grid container item direction='column' xs={6} alignItems='flex-end'>
          <Typography
            variant='body1'
            className={`display4 onHover ${property.class}`}
          >
            {property.amount}
          </Typography>
          <Typography
            variant='body1'
            className={`onHover ${property.class}`}
          >
            {property.desc}
          </Typography>
          <Typography
            variant='body1'
            className={`percentage onHover ${property.class}`}
          >
            {String(property.percentage).replace(/\./, ',')}
          </Typography>
        </Grid>
        <Grid container item xs={6} style={{ paddingLeft: '8px' }}>
          <Grid
            item
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
    <Grid container direction='column'>
      {patrimonies.map(inv => investmentChart(classes, inv, Math.floor(Math.random() * 6530)))}
    </Grid>
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
