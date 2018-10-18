import React, { PureComponent } from 'react'
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DatePickerMUI from 'material-ui-pickers/DatePicker'
import PropTypes from 'prop-types'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

class DatePicker extends PureComponent {

  state = {}

  validationInstance = this.props.validator ? this.props.validator.validator.register(
    this
  ) : false

  handleOnBlur(event) {
    if (this.props.onBlur) {
      return this.props.onBlur(event)
    } else {
      return this.validationInstance ? this.validationInstance.validate(event) : false
    }
  }

  render () {
    const inputProps = {
      onBlur: this.handleOnBlur.bind(this)
    }
    const { dateUtilityLibrary } = this.props
    if (this.validationInstance) {
      this.state.errors = {
        ...this.validationInstance.error
      }
    } else {
      this.state.errors = { hasError: false }
    }
    const proxyProps = { ...this.props }
    delete proxyProps.dateUtilityLibrary

    return (
      <MuiPickersUtilsProvider utils={dateUtilityLibrary}>
        <DatePickerMUI
          {...proxyProps}
          {...inputProps}
          error={this.state.errors.hasError}
        />
        {this.state.errors.hasError ?
          <FormHelperText style={{color:'#f44336'}}>
            {this.state.errors.errorMessage}
          </FormHelperText> : ''}
      </MuiPickersUtilsProvider>
    )
  }
}

DatePicker.propTYpes = {
  utils: PropTypes.object
}

export default DatePicker
