import React, { PureComponent } from 'react'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import TextFieldMUI from '@material-ui/core/TextField/TextField'
import PropTypes from 'prop-types'

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
    const { helperText, id, label, required, showHelper, value, type, autoFocus, spellCheck } = this.props

    const inputProps = {
      onBlur: this.handleInputBlur.bind(this),
      onChange: this.handleInputChange.bind(this),
      onFocus: this.handleInputFocus.bind(this),
      spellCheck: spellCheck
    }

    if (this.validationInstance) {
      this.state.errors = {
        ...this.validationInstance.error
      }
    } else {
      this.state.errors = { hasError: false }
    }

    const proxyProps = { ...this.props }
    delete proxyProps.validatorType
    delete proxyProps.showHelper
    delete proxyProps.minWidth
    delete proxyProps.maxWidth

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
          type={type}
          autoFocus={autoFocus}
        />
        {showHelper ? <FormHelperText id={id}> {helperText} </FormHelperText> : ''}
        {this.state.errors.hasError ? <FormHelperText
          id={id}> {this.state.errors.errorMessage} </FormHelperText> : ''}
      </FormControl>
    )
  }
}

TextField.propTypes = {
  spellCheck: PropTypes.bool
}

TextField.defaultProps = {
  id: `textField`,
  label: '',
  required: false,
  showHelper: false,
  value: '',
  margin: 'normal',
  spellCheck: false
}

export default TextField
