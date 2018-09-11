import { storiesOf } from '@storybook/react'
import Currency from '../Inputs/Currency/currency'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import NumberFormat from 'react-number-format'
import withTests from './withTests'

class CurrencyStory extends PureComponent {
  state = {
    value: false
  }

  handleCurrencyChange = decorateAction([args => {
    this.setState({ value: Number(args[0].target.value) })
    return args
  }])

  render () {
    const { value } = this.state

    return (
      <Currency
        id='CurrencyId'
        label='Campo Monetário'
        value={value}
        onChange={this.handleCurrencyChange('valor monetário modificado')}
        InputProps={{
          inputComponent: NumberFormatCustom
        }}
      />
    )
  }
}

function NumberFormatCustom (props) {
  const { inputRef, onChange, ...other } = props

  return (
      <div className='pl3'>
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
              fixedDecimalScale/>
      </div>
  )
}

storiesOf('Input', module)
  .addDecorator(withTests('currency'))
  .add('Currency', () => {
    return <CurrencyStory />
  })
