import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '../index'
import { getCurrencyFormat } from '../Core/masks'

class YourFinances extends PureComponent {
  render () {
    const { incomes, expenses } = this.props
    const balance = incomes - expenses

    let percentBalance = 0
    let percentIncomes = 100
    let percentExpenses = 100

    if (incomes > expenses) {
      percentIncomes = 100
      percentExpenses = Number(((expenses / incomes) * 100).toFixed(1))
      percentBalance = Number((((incomes - expenses) / incomes) * 100).toFixed(1))
    } else if (expenses > incomes) {
      percentExpenses = 100
      percentIncomes = Number(((incomes / expenses) * 100).toFixed(1))
      percentBalance = Number((((expenses - incomes) / expenses) * 100).toFixed(1))
    }

    const barStyles = {
      barIncomes: {
        height: 2,
        backgroundColor: '#94BA1D',
        width: `${percentIncomes}%`
      },
      barExpenses: {
        height: 2,
        backgroundColor: '#BA2B31',
        width: `${percentExpenses}%`
      },
      barBalance: {
        height: 2,
        backgroundColor: '#007CA3',
        width: `${percentBalance}%`
      }
    }

    return (
      <Grid container direction='column' className='mb3'>
        <Grid container justify='space-between'>
          <Typography>Rendas </Typography>
          <Typography>{getCurrencyFormat(incomes, 'R$', 0, ' ')}</Typography>
        </Grid>
        <Grid style={barStyles.barIncomes} className='mb3 mt1' />

        <Grid container justify='space-between'>
          <Typography>Despesas</Typography>
          <Typography>{getCurrencyFormat(expenses, 'R$', 0, ' ')}</Typography>
        </Grid>
        <Grid style={barStyles.barExpenses} className='mb3 mt1' />

        { balance > 0
          ? <Grid>
            <Grid container justify='space-between'>
              <Typography>
                <b>Saldo para investir </b>
              </Typography>
              <Typography>
                <b>{getCurrencyFormat(incomes - expenses, 'R$', 0, ' ')}</b>
              </Typography>
            </Grid>
            <Grid style={barStyles.barBalance} className='mt1' />
          </Grid>
          : <Grid className='mt2'>
            <Typography variant='body1' className='without-balance'>
              <b>Você não possui saldo para investir</b>
            </Typography>
          </Grid>}

      </Grid>
    )
  }
}

YourFinances.propTypes = {
  incomes: PropTypes.number,
  expenses: PropTypes.number
}

YourFinances.defaultProps = {
  incomes: 0,
  expenses: 0
}

export default YourFinances
