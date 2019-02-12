import NumberFormat from 'react-number-format'
import React from 'react'
import * as PropTypes from 'prop-types'

export function NumberFormatCustom (props) {
  const { inputRef, onBlur, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onBlur={() => {
        if (onBlur) {
          onBlur({ target: { value: props.value } })
        }
      }}
      onValueChange={values => {
        onChange({
          target: {
            value: values.floatValue
          }
        })
      }}
      thousandSeparator=' '
      decimalSeparator=','
      decimalScale={2}
      fixedDecimalScale />
  )
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export function getCurrencyFormat (number, prefix = '', defaultValue = 0, separator = ',') {
  if (number === null || typeof number === 'undefined') {
    return defaultValue
  }

  let numbervalue
  if (typeof number === 'string') {
    numbervalue = Number(number.replace(/\s/g, '').replace(',', '.'))
  } else {
    numbervalue = number
  }

  const value = `${prefix} ${numbervalue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

  if (separator) {
    return value.replace(/\./g, separator)
  }

  return value
}

export function formatDecAsPercent (value, nCasas = 1, separator = ',', defaultValue = 0) {
  return (getPercentageFormat(value, nCasas, separator, defaultValue, true))
}

export function formatPercent (value, nCasas = 1, separator = ',', defaultValue = 0) {
  return (getPercentageFormat(value, nCasas, separator, defaultValue, false))
}

function getPercentageFormat (value, nCasas = 1, separator = ',', defaultValue = 0, isDecimal = false) {
  if (value === null || typeof value === 'undefined') {
    return defaultValue
  }

  let numbervalue
  if (typeof value === 'string') {
    numbervalue = Number(value.replace('%', '').replace(/\s/g, '').replace(',', '.'))
  } else {
    numbervalue = value
  }

  let valueFormatted
  if (isDecimal) {
    valueFormatted = (numbervalue * 100).toFixed(nCasas)
  } else {
    valueFormatted = (numbervalue).toFixed(nCasas)
  }
  return `${valueFormatted.replace('.', separator)}% `
}
