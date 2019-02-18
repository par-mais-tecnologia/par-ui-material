import React, { PureComponent } from 'react'
import SelectMUI from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText'

class Select extends PureComponent {
  state = {
    open: false
  }

  validationInstance = this.props.validator ? this.props.validator.validator.register(
    this
  ) : false

  handleClose (event) {
    if (this.props.onClose) {
      return this.props.onClose(event)
    } else {
      this.setState({ open: false })
      return this.validationInstance ? this.validationInstance.validate(event) : false
    }
  }

  handleChange (event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  handleOpen (event) {
    if (this.props.onFocus) {
      this.props.onFocus(event)
    } else {
      this.setState({ open: true })
    }
  }

  getStyle (props) {
    const { minWidth } = props
    return { minWidth: minWidth || '100%' }
  }

  render () {
    const inputProps = {
      onClose: this.handleClose.bind(this),
      onChange: this.handleChange.bind(this),
      onOpen: this.handleOpen.bind(this)
    }
    const { required, showLabel, id, label } = this.props
    if (this.validationInstance) {
      this.state.errors = {
        ...this.validationInstance.error
      }
    } else {
      this.state.errors = { hasError: false }
    }
    const proxyProps = { ...this.props }
    delete proxyProps.minWidth
    delete proxyProps.showError
    delete proxyProps.showLabel
    delete proxyProps.errorMessage

    return (
      <FormControl
        aria-describedby='select-form-control'
        required={required}
        error={this.state.errors.hasError}
        style={this.getStyle(this.props)}>
        {showLabel && label !== undefined
          ? <InputLabel htmlFor={id}>
            {label}
          </InputLabel> : ''
        }
        <SelectMUI
          {...proxyProps}
          {...inputProps}
          open={this.state.open}
          error={this.state.errors.hasError}
          inputProps={{
            name: label,
            id: { id }
          }} />
        {this.state.errors.hasError
          ? <FormHelperText style={{ marginTop: '2px', color: '#BA2B31' }}
            id={id}> {this.state.errors.errorMessage}
          </FormHelperText> : ''
        }
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
  error: false
}

export default Select
