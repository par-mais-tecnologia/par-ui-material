import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Typography } from '..'

const styles = theme => ({
  ...theme.goalSummary,
  wrapper: {
    ...theme.goalSummary.wrapper,
    [theme.breakpoints.down(700)]: {
      flexDirection: 'column'
    }
  },
  divisor: {
    ...theme.goalSummary.divisor,
    [theme.breakpoints.down(700)]: {
      width: '70%',
      height: '1px'
    }
  }
})

const GoalSummary = (props) => {
  const { classes } = props

  const currencyFormater = value => `R$ ${value}`
  const timeCounterFormater = (years, months) => {
    let phrase = years > 0
      ? years > 1
        ? `${years} anos `
        : `${years} ano `
      : ''

    phrase += years && months > 0 ? ' e ' : ''

    phrase += months > 0
      ? months > 1
        ? `${months} meses`
        : `${months} mês`
      : ''
    return phrase
  }

  return (
    <div className={classes.wrapper}>

      <div className={classes.section}>
        <Typography classes={{
          root: classes.typography
        }}>
          <b>
            {props.firstTitle}
          </b>
        </Typography>
        <Typography classes={{
          root: classes.typography
        }}>
          {currencyFormater(props.firstValue)}
        </Typography>
      </div>

      <div className={classes.divisor} />

      <div className={classes.section}>
        <Typography classes={{
          root: classes.typography
        }}>
          <b>
            {props.secondTitle}
          </b>
        </Typography>
        <Typography classes={{
          root: classes.typography
        }}>
          {currencyFormater(props.secondValue)}
        </Typography>

      </div>

      <div className={classes.divisor} />

      <div className={classes.section}>
        <Typography classes={{
          root: classes.typography
        }}>
          <b>
            {props.thirdTitle}
          </b>
        </Typography>
        <Typography classes={{
          root: classes.typography
        }}>
          {timeCounterFormater(props.thirdValueYears, props.thirdValueMonths)}
        </Typography>
      </div>
    </div>
  )
}

GoalSummary.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  thirthValue: PropTypes.number
}
export default withStyles(styles)(GoalSummary)
