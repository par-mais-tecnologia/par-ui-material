import React, { PureComponent } from 'react'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePickerMUI from 'material-ui-pickers/DatePicker'
import PropTypes from 'prop-types'

class DatePicker extends PureComponent {
  render () {
    const { dateUtilityLibrary } = this.props

    const proxyProps = { ...this.props }
    delete proxyProps.dateUtilityLibrary

    return (
      <MuiPickersUtilsProvider utils={dateUtilityLibrary}>
        <DatePickerMUI
          {...proxyProps}
        />
      </MuiPickersUtilsProvider>
    )
  }
}

DatePicker.propTYpes = {
  utils: PropTypes.object
}

export default DatePicker
