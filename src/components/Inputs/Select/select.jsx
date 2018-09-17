import React, { PureComponent } from 'react'
import SelectMUI from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

class Select extends PureComponent {
  getStyle (props) {
    const { minWidth } = props
    return { minWidth: minWidth || '100%' }
  }

  render () {
    const { required, showLabel, showError, errorMessage, id, label, error } = this.props

    return (
      <FormControl
        error={error}
        aria-describedby='select-form-control'
        required={required}
        style={this.getStyle(this.props)}>
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
  hasError: false,
  error: false
}

export default Select
