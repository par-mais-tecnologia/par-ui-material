import React, { PureComponent } from 'react'
import SelectMUI from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

class Select extends PureComponent {
  render () {
    const { required, showLabel, showError, errorMessage, id, label } = this.props

    return (
      <FormControl
        aria-describedby='select-form-control'
        required={required}>
        {showLabel ? <InputLabel htmlFor={id}>{label}</InputLabel> : ''}
        <SelectMUI
          {...this.props}
          inputProps={{
            name: { label },
            id: { id }
          }} />
        {showError ? <FormHelperText id='email-form-control'> {errorMessage} </FormHelperText> : ''}
      </FormControl>
    )
  }
}

Select.defaultProps = {
  id: `Select ${Math.floor((Math.random() * 10) + 1)}`,
  showError: true,
  showLabel: true,
  required: false,
  errorMessage: '',
  hasError: false
}

export default Select
