import { storiesOf } from '@storybook/react'
import { TextField } from '../../src'

import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import { NumberFormatCustom } from '../../src/Core/masks'
import * as dictionary from '../../src/Core/dictionary'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import bioFinanceiraTheme from '../../src/BioFinanceiraTheme'

class CurrencyStory extends PureComponent {
  state = {
    value: ''
  }

  handleCurrencyChange = decorateAction([args => {
    this.setState({value: Number(args[0].target.value)})
    return args
  }])

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
        <MuiThemeProvider theme={bioFinanceiraTheme}>
        <TextField
          id='CurrencyId'
          label={dictionary.CAMPO_MONETARIO}
          value={value}
          onChange={this.handleCurrencyChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
          InputProps={{
            inputComponent: NumberFormatCustom,
          }}
        />
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Currency', () => {
    return <CurrencyStory/>
  })
