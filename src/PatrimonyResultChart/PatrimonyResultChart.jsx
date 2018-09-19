import React from 'react'
import Grid from '@material-ui/core/Grid'

import { Typography, withStyles } from '@material-ui/core'
import './style.css'

const styles = {
  patrimony: {
    paddingBottom: '16px',
    '&$patrimony:hover .onHover.investment': {
      color: '#632B7D'
    },
    '&$patrimony:hover .onHover.realstate': {
      color: '#5EB8C0'
    },
    '&$patrimony:hover .onHover.movable': {
      color: '#347A7C'
    },
    '&$patrimony:hover .bar': {
      animation: 'createBox 0.2s forwards'
    }
  }
}

function PatrimonyResultChart (props) {
  const investmentChart = (classes, property) => {
    return (
      <Grid container direction='row' className={classes.patrimony}>
        <Grid container direction='column' xs={6} alignItems='flex-end'>
          <Typography
            variant='display1'
            className={`onHover ${property.class}`}
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
            variant='display2'
            className={`onHover ${property.class}`}
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

  const createObjects = (investments, realState, movableAssets) => {
    const total = investments + realState + movableAssets
    const percentinv = Number(((investments / total) * 100).toFixed(1))
    const percentreal = Number(((realState / total) * 100).toFixed(1))
    const percentmov = Number(((movableAssets / total) * 100).toFixed(1))
    const inv = {
      amount: `R$ ${investments}`,
      desc: 'Investimentos',
      percentage: `${percentinv}%`,
      backgroundColor: '#632B7D',
      class: 'investment'
    }
    const rs = {
      amount: `R$ ${realState}`,
      desc: 'Bens imóveis',
      percentage: `${percentreal}%`,
      backgroundColor: '#5EB8C0',
      class: 'realstate'
    }
    const ma = {
      amount: `R$ ${movableAssets}`,
      desc: 'Bens móveis',
      percentage: `${percentmov}%`,
      backgroundColor: '#347A7C',
      class: 'movable'
    }

    return [inv, rs, ma]
  }

  const { classes, investments, realState, movableAssets } = props
  const patrimonies = createObjects(investments, realState, movableAssets)

  return (
    <Grid container direction='column'>
      {patrimonies.map(inv => investmentChart(classes, inv))}
    </Grid>
  )
}

export default withStyles(styles)(PatrimonyResultChart)
