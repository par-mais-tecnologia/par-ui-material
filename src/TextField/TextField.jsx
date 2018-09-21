import React, { PureComponent } from 'react'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import TextFieldMUI from '@material-ui/core/TextField/TextField'

class TextField extends PureComponent {
  state = {}

  validationInstance = this.props.validator ? this.props.validator.validator.register(
    this
  ) : false

  handleInputBlur (event) {
    if (this.props.onBlur) {
      return this.props.onBlur(event)
    } else {
      return this.validationInstance ? this.validationInstance.validate(event) : false
    }
  }

  handleInputChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleInputFocus (event) {
    if (this.props.onFocus) {
      this.props.onFocus(event)
    }
  }

  getStyle (props) {
    const { minWidth, maxWidth, style } = props
    return {
      minWidth: minWidth || '0',
      maxWidth: maxWidth || '100%',
      ...style
    }
  }

  render () {
    const inputProps = {
      onBlur: this.handleInputBlur.bind(this),
      onChange: this.handleInputChange.bind(this),
      onFocus: this.handleInputFocus.bind(this)
    }

    const { helperText, id, label, required, showHelper, value } = this.props
    if (this.validationInstance) {
      this.state.errors = {
        ...this.validationInstance.error
      }
    } else {
      this.state.errors = { hasError: false }
    }

    const proxyProps = { ...this.props }
    delete proxyProps.validatorType

    return (
      <FormControl
        aria-describedby={id}
        required={required}
        style={this.getStyle(this.props)}>
        <TextFieldMUI
          error={this.state.errors.hasError}
          {...proxyProps}
          {...inputProps}
          label={label}
          id={id}
          margin='normal'
          value={value}
        />
        {showHelper ? <FormHelperText id={id}> {helperText} </FormHelperText> : ''}
        {this.state.errors.hasError ? <FormHelperText
          id={id}> {this.state.errors.errorMessage} </FormHelperText> : ''}
      </FormControl>
    )
  }
}

TextField.defaultProps = {
  id: `textField ${Math.floor(Math.random() * 100)}`,
  label: '',
  required: false,
  showHelper: false,
  value: ''
}

export default TextField