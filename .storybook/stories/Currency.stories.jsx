import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { decorateAction } from '@storybook/addon-actions'
import { MuiThemeProvider, Typography } from '@material-ui/core'

import { BioFinanceiraTheme, TextField } from '../../src'
import * as dictionary from '../../src/Core/dictionary'
import { NumberFormatCustom } from '../../src/Core/masks'

class CurrencyStory extends PureComponent {
  state = {
    value: '',
    valueInitial: 0
  }

  handleCurrencyNoValueChange = decorateAction([args => {
    this.setState({
      value:
        Number(args[0].target.value) || undefined
    })
    return args
  }])

  handleCurrencyChange = decorateAction([args => {
    this.setState({
      valueInitial:
        Number(args[0].target.value)
    })
    return args
  }])

  handleCurrencyBlur = decorateAction([args => {
    this.setState({
      valueInitial:
        Number(args[0].target.value)
    })
    return args
  }])

  render () {
    const {value, valueInitial} = this.state

    return (
      <div className='pl3'>
        <MuiThemeProvider theme={BioFinanceiraTheme}>
            <Typography>Sem conteúdo inicial ou se == 0</Typography>
            <TextField
              id='CurrencyId'
              label={dictionary.CAMPO_MONETARIO}
              value={value}
              onChange={this.handleCurrencyNoValueChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          <div className='pv4'>
            <Typography>Com conteúdo inicial e voltando para 0</Typography>
            <TextField
              id='CurrencyId'
              label={dictionary.CAMPO_MONETARIO}
              value={valueInitial}
              onChange={this.handleCurrencyChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
              onBlur={this.handleCurrencyBlur(dictionary.VALOR_MONETARIO_MODIFICADO)}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Currency', () => {
    return <CurrencyStory/>
  })
