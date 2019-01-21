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
          {props.thirdValue}
        </Typography>
      </div>
    </div>
  )
}

GoalSummary.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  thirthValue: PropTypes.string
}
export default withStyles(styles)(GoalSummary)
