import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '../'
import { withStyles } from '@material-ui/core/styles'
import { getCurrencyFormat } from '../Core/functions'

const styles = (theme) => ({
  reserve: theme.styles && theme.styles.fonts && theme.styles.fonts.subtitle2 ? theme.styles.fonts.subtitle2 : {}
})

class EmergencyReserve extends PureComponent {
  render () {
    const { reserve, months, classes } = this.props
    return (
      <Grid container direction='column' className='mt3'>
        <Grid item className='pv3'>
          <Typography>Recomendamos que você tenha uma reserva de emergência de</Typography>
        </Grid>
        <Grid item className='pv3'>
          <Typography className={classes.reserve}>R$ {getCurrencyFormat(reserve)}</Typography>
          <Typography>Valor suficiente para cobrir</Typography>
        </Grid>
        <Grid item className='pv3'>
          <Typography className={classes.reserve}>{months} meses</Typography>
          <Typography>De suas despesas</Typography>
        </Grid>
      </Grid>
    )
  }
}

EmergencyReserve.propTypes = {
  reserve: PropTypes.number,
  months: PropTypes.number
}

EmergencyReserve.defaultProps = {
  reserve: 0,
  months: 0
}

export default withStyles(styles)(EmergencyReserve)
