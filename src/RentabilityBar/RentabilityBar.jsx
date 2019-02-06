import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import { formatDecAsPercent, getCurrencyFormat } from '../Core/masks'
import moment from 'moment'

const MainBoxClasses = 'flex items-center justify-center'
const SubBoxClasses = 'flex items-center justify-between'
const ColumnsClasses = 'flex flex-column ph2'

const styles = theme => ({
  ...theme.rentabilityBar,
  typography: {
    ...theme.rentabilityBar.typography,
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

class RentabilityBar extends Component {
  state = {
    expanded: false,
    data: [],
    header: []
  }

  componentDidMount () {
    let dataFormated = this.props.periods.map(period => {
      period = {
        idxQuota: this.checkState(period.idxQuota),
        walletQuota: this.checkState(period.walletQuota),
        rentability: this.checkState(period.rentability),
        date: period.date
      }
      return period
    })

    let headerFormated = this.props.header.map(column => {
      column = {
        title: column.title,
        value: this.checkState(column.value),
        type: column.type || null
      }
      return column
    })

    this.setState({ header: headerFormated, data: dataFormated })
  }

  handleToggle = () => this.setState({ expanded: !this.state.expanded })

  getMonth = (date) => moment((moment(date).month() + 1), 'MM').format('MMMM')

  formatValue = (value, type) => type === 'currency'
    ? getCurrencyFormat(value, 'R$', 0, ' ')
    : formatDecAsPercent(value)

  checkState = (value) => (
    value > 0
      ? { class: this.props.classes.positiveState, sign: '+', value }
      : value === 0
        ? { class: this.props.classes.neutralState, sign: '', value }
        : { class: this.props.classes.negativeState, sign: '', value }
  )

  render () {
    const { classes, periods } = this.props

    return (
      <div>
        <div className={[ MainBoxClasses, classes.mainBox, this.props.className ].join(' ')}>
          <div className={[SubBoxClasses, classes.subBox].join(' ')}>
            {
              this.state.header.map(column => (
                <div className={[ColumnsClasses, classes.boxColumn].join(' ')}>
                  <h1 className={[classes.title, classes.typography].join(' ')}>
                    {column.title}
                  </h1>
                  <p className={[classes.typography, column.value.class].join(' ')}>
                    <small>{column.value.sign}</small>
                    {this.formatValue(column.value.value, column.type)}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
        <input className={classes.toggleInput} type='checkbox' id='toggle' onChange={() => this.handleToggle()} />
        <div className={classes.collapsableBox}>
          {
            periods && this.state.data.map(period => (
              <div className={[ MainBoxClasses, classes.collapsableRow, this.props.className ].join(' ')}>
                <div className={[SubBoxClasses, classes.subBox].join(' ')}>
                  <div className={[ColumnsClasses, classes.boxColumn].join(' ')}>
                    <h1 className={[classes.title, classes.typography].join(' ')}>
                      {this.getMonth(period.date)}
                    </h1>
                    <p className={[classes.typography, period.rentability.class].join(' ')}>
                      <small>{period.rentability.sign}</small>
                      {getCurrencyFormat(period.rentability.value, 'R$', 0, ' ')}
                    </p>
                  </div>
                  <div className={[classes.boxColumn].join(' ')}>
                    <p className={[classes.typography, period.walletQuota.class].join(' ')}>
                      <small>{period.walletQuota.sign}</small>
                      {formatDecAsPercent(period.walletQuota.value)}
                    </p>
                  </div>
                  <div className={[ColumnsClasses, classes.boxColumn].join(' ')}>
                    <p className={[classes.typography, period.idxQuota.class].join(' ')}>
                      <small>{period.idxQuota.sign}</small>
                      {formatDecAsPercent(period.idxQuota.value)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          periods && <div>
            <label className={classes.toggle} for='toggle'>
              <i className={`par-icon-expansor-${this.state.expanded ? 'less' : 'more'} mh2`} />
              {this.state.expanded ? 'OCULTAR' : 'MOSTRAR'} RENTABILIDADE MÊS A MÊS
            </label>
          </div>
        }
      </div>
    )
  }
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
