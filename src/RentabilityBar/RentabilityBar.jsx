import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { formatDecAsPercent, getCurrencyFormat } from '../Core/masks'

const MainBoxClasses = 'flex items-center justify-center'
const SubBoxClasses = 'flex items-center justify-between'
const ColumnsClasses = 'flex flex-column ph2'
const styles = theme => ({
  ...theme.rentabilityBar,
  positiveState: {
    ...theme.rentabilityBar.positiveState,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  },
  negativeState: {
    ...theme.rentabilityBar.negativeState,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  },
  neutralState: {
    ...theme.rentabilityBar.neutralState,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  },
  title: {
    ...theme.rentabilityBar.title,
    [theme.breakpoints.down(700)]: {
      fontSize: '12px'
    }
  }
})

const RentabilityBar = (props) => {
  const { classes } = props

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
            {getCurrencyFormat(props.firstValue, 'R$', 0, ' ')}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.secondTitle}
          </h1>
          <p className={stateClasses.second.class}>
            <small>{stateClasses.second.sign}</small>
            {formatDecAsPercent(props.secondValue)}
          </p>
        </div>
        <div className={ColumnsClasses}>
          <h1 className={classes.title}>
            {props.thirdTitle}
          </h1>

          <p className={classes.neutralState}>
            {formatDecAsPercent(props.thirdValue)}
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
  thirdValue: PropTypes.number
}

export default withStyles(styles)(RentabilityBar)
