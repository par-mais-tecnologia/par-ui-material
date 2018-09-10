import React, { PureComponent } from 'react'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePickerMUI from 'material-ui-pickers/DatePicker'
import PropTypes from 'prop-types'

export default class DatePicker extends PureComponent {
  render () {
    const { dateUtilityLibrary } = this.props

    return (
      <MuiPickersUtilsProvider utils={dateUtilityLibrary}>
        <DatePickerMUI
          {...this.props}
        />
      </MuiPickersUtilsProvider>
    )
  }
}

DatePicker.propTYpes = {
  utils: PropTypes.object
}
