import React, { PureComponent } from 'react'
import * as dictionary from '../../Core/dictionary'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import TextFieldMUI from '@material-ui/core/TextField/TextField'
import * as Validation from '../../Core/validation'

class TextField extends PureComponent {
  state = {}

  handleInputBlur(event) {
      if (this.props.onBlur) {
          this.props.onBlur(event)
      }
  }

  handleInputChange(event) {
      if (this.props.onBlur) {
          this.props.onChange(event)
      }
  }

  handleInputFocus(event) {
      if (this.props.onBlur) {
          this.props.onFocus(event)
      }
  }

  render () {
      const inputProps = {
          onBlur: this.handleInputBlur.bind(this),
          onChange: this.handleInputChange.bind(this),
          onFocus: this.handleInputFocus.bind(this),
      };

    const { value, showHelper, required, id } = this.props

    return (
      <FormControl
        aria-describedby='email-form-control'
        required={required}>
        <TextFieldMUI
          {...inputProps}
          value={value}
          id={id}
          label={dictionary.EMAIL}
          margin='normal'
        />
        {showHelper ? <FormHelperText id='email-form-control'> {errorMessage} </FormHelperText> : ''}
      </FormControl>
    )
  }
}

TextField.defaultProps = {
  label: dictionary.EMAIL,
  value: '',
  showError: true,
  required: false,
  errorMessage: '',
  hasError: false
}

export default TextField
