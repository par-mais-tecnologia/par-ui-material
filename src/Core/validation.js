import * as dictionary from './dictionary'
import ReactDOM from 'react-dom'

export const types = {
  email: emailValidation,
  required: requiredField
}

export class Validator {
  instances = []

  types = types

  register = (component) => {
    const instance = {
      id: uuidv4(),
      component,
      type: component.props.validator.type,
      error: component.props.validator.type(component.props.value, false)
    }
    instance.validate = evt => {
      this.validate(instance, evt)
    }
    this.instances.push(instance)
    return instance
  }

  validate = (instance, evt) => {
    if (instance.component && instance.component.constructor.name === 'Select') {
      validateSelectComponent(instance, evt.target.textContent)
    } else if (instance.component && instance.component.constructor.name === 'DatePicker') {
      validateDatePickerComponent(instance, evt)
    } else if (instance && instance.id) {
      validateComponent(instance)
    } else {
      this.instances.map(instance => validateComponent(instance))

      const firstWithError = this.instances
        .filter(instance => instance.error.hasError)
        .map(instance => ReactDOM.findDOMNode(instance.component))
        .sort(elm => elm.getBoundingClientRect().top)
        .slice(0)[0]

      if (firstWithError) {
        window.scrollTo({
          top: firstWithError.getBoundingClientRect().top + window.scrollY,
          left: 0,
          behavior: 'smooth'
        })
        return false
      } else {
        return true
      }
    }
  }
}

function validateComponent (instance) {
  instance.error = instance.type(
    instance.component.props.value,
    instance.component.props.required
  )
  instance.component.setState({ state: instance.component.state })
  return instance
}

function validateSelectComponent (instance, value) {
  instance.error = instance.type(
    value,
    instance.component.props.required
  )
  instance.component.setState({ state: instance.component.state })
  return instance
}

function validateDatePickerComponent (instance, evt) {
  instance.error = instance.type(
    evt.target.value,
    instance.component.props.required
  )
  instance.component.setState({ state: instance.component.state })
  return instance
}

function isEmailValid (email) {
  const re = /\S+@\S+\.\S+/
  return re.test(String(email).toLowerCase())
}

function emailValidation (email, isRequired) {
  let error = { hasError: false, errorMessage: '' }

  if (isRequired && !exist(email)) {
    return { hasError: true, errorMessage: dictionary.CAMPO_OBRIGATORIO }
  }

  if (exist(email) && !isEmailValid(email)) {
    return { hasError: true, errorMessage: dictionary.EMAIL_INVALIDO }
  }

  return error
}

function requiredField (value, isRequired) {
  let error = { hasError: false, errorMessage: '' }

  if (isRequired && !exist(value)) {
    return { hasError: true, errorMessage: dictionary.CAMPO_OBRIGATORIO }
  }

  return error
}

function exist (value) {
  return !!value
}

function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0

    var v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
