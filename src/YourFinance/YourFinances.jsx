import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import { getCurrencyFormat } from '../Core/functions'

class YourFinances extends PureComponent {
  render () {
    const { incomes, expenses } = this.props
    const balance = incomes - expenses
    let referenceValue

    let percentIncomes

    let percentExpenses

    let percentBalance = 0

    if (incomes > expenses) {
      referenceValue = incomes
      percentIncomes = 100
      percentExpenses = Number(((expenses / referenceValue) * 100).toFixed(1))
      percentBalance = Number((((referenceValue - expenses) / referenceValue) * 100).toFixed(1))
    } else if (expenses > incomes) {
      referenceValue = expenses
      percentExpenses = 100
      percentIncomes = Number(((incomes / referenceValue) * 100).toFixed(1))
      percentBalance = Number((((referenceValue - incomes) / referenceValue) * 100).toFixed(1))
    } else {
      percentIncomes = 100
      percentExpenses = 100
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
      <Grid container direction='column' className='mt3'>

        <Grid container justify='space-between'>
          <Typography>Rendas: </Typography>
          <Typography>R$ {getCurrencyFormat(incomes)}</Typography>
        </Grid>
        <Grid style={barStyles.barIncomes} className='mb3 mt1' />

        <Grid container justify='space-between'>
          <Typography>Despesas:</Typography>
          <Typography>R$ {getCurrencyFormat(expenses)}</Typography>
        </Grid>
        <Grid style={barStyles.barExpenses} className='mb3 mt1' />

        { balance > 0
          ? <Grid>
            <Grid container justify='space-between'>
              <Typography>Saldo para investir: </Typography>
              <Typography>R$ {getCurrencyFormat(incomes - expenses)}</Typography>
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
