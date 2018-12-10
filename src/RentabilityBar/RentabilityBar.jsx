import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const MainBoxClasses = 'flex items-center justify-center shadow-3'
const SubBoxClasses = 'flex items-center justify-between'
const ColumnsClasses = 'flex flex-column ph2'
const styles = theme => (theme.rentabilityBar)

const RentabilityBar = (props) => {
  const { classes } = props
  return (
    <div className={[ MainBoxClasses, classes.mainBoxStyles ].join(' ')}
    >
      <div className={[SubBoxClasses, classes.subBoxStyles].join(' ')}>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.firstTitle}
          </h1>
          <p className={
            props.firstValue && props.firstValue > 0
              ? classes.positiveState : classes.neutralState
          }>
            <small>
              {
                props.firstValue && props.firstValue > 0
                  ? '+' : ''
              }
            </small>
            {props.firstValue}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.secondTitle}
          </h1>
          <p className={
            props.secondValue && props.secondValue > 0
              ? classes.positiveState : classes.neutralState
          }>
            <small>
              {
                props.secondValue && props.secondValue > 0
                  ? '+' : ''
              }
            </small>
            {props.secondValue}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.thirthTitle}
          </h1>

          <p className={
            props.thirthValue && props.thirthValue > 0
              ? classes.positiveState : classes.neutralState
          }>
            <small>
              {
                props.thirthValue && props.thirthValue > 0
                  ? '+' : ''
              }
            </small>
            {props.thirthValue}
          </p>
        </div>
      </div>
    </div>
  )
}

RentabilityBar.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  thirthValue: PropTypes.number
}

export default withStyles(styles)(RentabilityBar)
