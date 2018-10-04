import NumberFormat from 'react-number-format'
import React from 'react'
import * as PropTypes from 'prop-types'

export function NumberFormatCustom (props) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        })
      }}
      thousandSeparator=' '
      decimalSeparator=','
      prefix='R$ '
      decimalScale={2}
      fixedDecimalScale />
  )
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export const getCurrencyFormat = (number, prefix = '', defaultValue, separator) => {
  if (isNaN(number) || number === null) {
    return defaultValue
  }

  const value = prefix + number.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  if (separator) {
    return value.replace(/\./g, separator)
  }

  return value
}
