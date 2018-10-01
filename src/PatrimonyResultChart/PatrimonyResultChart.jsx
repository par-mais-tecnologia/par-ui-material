import React from 'react'
import Grid from '@material-ui/core/Grid'

import { Typography, withStyles } from '@material-ui/core'

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
      amount: `R$ ${investments}`,
      desc: 'Investimentos',
      percentage: `${percentinv}%`,
      backgroundColor: props.investmentColor,
      class: 'investment'
    }
    const rs = {
      amount: `R$ ${realState}`,
      desc: 'Bens imóveis',
      percentage: `${percentreal}%`,
      backgroundColor: props.realStateColor,
      class: 'realstate'
    }
    const ma = {
      amount: `R$ ${movableAssets}`,
      desc: 'Bens móveis',
      percentage: `${percentmov}%`,
      backgroundColor: props.movableAssetsColor,
      class: 'movable'
    }

    return [inv, rs, ma]
  }

  const investmentChart = (classes, property) => {
    return (
      <Grid container direction='row' className={classes.patrimony}>
        <Grid container direction='column' xs={6} alignItems='flex-end'>
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
            {property.percentage}
          </Typography>
        </Grid>
        <Grid container xs={6} style={{ paddingLeft: '8px' }}>
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
      {patrimonies.map(inv => investmentChart(classes, inv))}
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
