import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const MainBoxClasses = 'flex items-center justify-center shadow-3'
const SubBoxClasses = 'flex items-center justify-between'
const ColumnsClasses = 'flex flex-column ph2'
const styles = theme => (theme.rentabilityBar)

const RentabilityBar = (props) => {
  const { classes } = props

  const percentageFormater = (value) => {
    const decimal = value
    const nCasas = 2

    return (Number((decimal * 100).toFixed(nCasas)) + '%')
  }

  const currencyFormater = (value) => ('R$' + value)

  const checkState = (property) => (
    props[property] > 0
      ? { class: classes.positiveState, sign: '+' }
      : props[property] === 0
        ? { class: classes.neutralState, sign: '' }
        : { class: classes.negativeState, sign: '' }
  )

  const stateClasses = {
    first: checkState('firstValue'),
    second: checkState('secondValue'),
    third: checkState('thirdValue')
  }

  return (
    <div className={[ MainBoxClasses, classes.mainBoxStyles ].join(' ')}
    >
      <div className={[SubBoxClasses, classes.subBoxStyles].join(' ')}>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.firstTitle}
          </h1>
          <p className={stateClasses.first.class}>
            <small>{stateClasses.first.sign}</small>
            {currencyFormater(props.firstValue)}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.secondTitle}
          </h1>
          <p className={stateClasses.second.class}>
            <small>{stateClasses.second.sign}</small>
            {percentageFormater(props.secondValue)}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.thirdTitle}
          </h1>

          <p className={stateClasses.third.class}>
            <small>{stateClasses.third.sign}</small>
            {percentageFormater(props.thirdValue)}
          </p>
        </div>
      </div>
    </div>
  )
}

RentabilityBar.defaultProps = {
  firstValue: 0,
  secondValue: 0,
  thirdValue: 0
}

RentabilityBar.propTypes = {
  firstValue: PropTypes.number,
  secondValue: PropTypes.number,
  thirthValue: PropTypes.number
}

export default withStyles(styles)(RentabilityBar)
