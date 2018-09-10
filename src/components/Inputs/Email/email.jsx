import React, { PureComponent } from 'react'
import * as dictionary from '../../Core/dictionary'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import TextField from '@material-ui/core/TextField/TextField'
import * as Validation from '../../Core/validation'

class EmailInput extends PureComponent {
  state = {}

  handleOnBlur (e) {
    let error = Validation.emailValidation(e.target.value, this.props.required)
    this.setState({ hasError: error.emailError, errorMessage: error.message })
  }

  render () {
    const { value, showError, onChange, required } = this.props
    const { errorMessage, hasError } = this.state

    return (
      <FormControl
        aria-describedby='email-form-control'
        required={required}>
        <TextField
          error={hasError}
          value={value}
          id='email-input'
          label={dictionary.EMAIL}
          margin='normal'
          onChange={onChange}
          onBlur={(e) => this.handleOnBlur(e)}
        />
        {showError ? <FormHelperText id='email-form-control'> {errorMessage} </FormHelperText> : ''}
      </FormControl>
    )
  }
}

EmailInput.defaultProps = {
  label: dictionary.EMAIL,
  value: '',
  showError: true,
  required: false,
  errorMessage: '',
  hasError: false
}

export default EmailInput
