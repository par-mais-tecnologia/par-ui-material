import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { Typography } from '..'
import { getCurrencyFormat } from '../Core/masks'

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
  const { classes, data } = props

  return (
    <div className={classes.wrapper}>
      {data.map((d, i) => (
        <Fragment>
          <div className={classes.section}>
            <Typography classes={{
              root: classes.typography
            }}>
              <b>
                {d.title}
              </b>
            </Typography>
            <Typography classes={{
              root: classes.typography
            }}>
              {d.type === 'currency' ? getCurrencyFormat(d.value, 'R$', 0, ' ') : d.value}
            </Typography>
          </div>
          {i !== (data.length - 1) && <div className={classes.divisor} />}
        </Fragment>
      ))}
    </div>
  )
}

GoalSummary.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired
}
export default withStyles(styles)(GoalSummary)
