import React, { PureComponent } from 'react'
import InputUI from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel/InputLabel'
import { getMask } from './masks'

class InputMask extends PureComponent {
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
      const { helperText, id, label, required, showHelper, value, typeMask, inputComponent, showEndAdornment } = this.props
      if (this.validationInstance) {
        this.state.errors = {
          ...this.validationInstance.error
        }
      } else {
        this.state.errors = { hasError: false }
      }

      const proxyProps = { ...this.props }
      delete proxyProps.validatorType
      delete proxyProps.typeMask
      delete proxyProps.showEndAdornment

      return (
        <FormControl
          aria-describedby={id}
          required={required}
          style={this.getStyle(this.props)}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <InputUI
            error={this.state.errors.hasError}
            {...proxyProps}
            {...inputProps}
            inputComponent={inputComponent}
            id={id}
            value={value}
            endAdornment={showEndAdornment ? <InputAdornment position='end'>{getMask(typeMask, value)}</InputAdornment> : ''}
          />
          {showHelper ? <FormHelperText id={id}> {helperText} </FormHelperText> : ''}
          {this.state.errors.hasError ? <FormHelperText
            id={id}> {this.state.errors.errorMessage} </FormHelperText> : ''}
        </FormControl>
      )
    }
}

export default InputMask
