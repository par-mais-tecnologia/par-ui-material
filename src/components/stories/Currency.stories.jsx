import { storiesOf } from '@storybook/react'
import TextField from '../Inputs/TextField/textField'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import { NumberFormatCustom } from '../Core/masks'
import withTests from './withTests'
import * as dictionary from '../Core/dictionary'

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
        <div className='pl3'>
            <TextField
                id='CurrencyId'
                label={dictionary.CAMPO_MONETARIO}
                value={value}
                onChange={this.handleCurrencyChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
                InputProps={{
                    inputComponent: NumberFormatCustom
                }}
            />
        </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('currency'))
  .add('Currency', () => {
    return <CurrencyStory />
  })
