import { storiesOf } from '@storybook/react'
import { TextField } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import { NumberFormatCustom } from '../../src/Core/masks'
import * as dictionary from '../../src/Core/dictionary'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import { BioFinanceiraTheme } from '../../src'
import { Typography } from '@material-ui/core'

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

  render () {
    const {value, valueInitial} = this.state

    return (
      <div className='pl3'>
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <Typography>
            <h3>Sem conteúdo inicial ou se == 0</h3>
            <TextField
              id='CurrencyId'
              label={dictionary.CAMPO_MONETARIO}
              value={value}
              onChange={this.handleCurrencyNoValueChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
            <h3>Com conteúdo inicial e voltando para 0</h3>
            <TextField
              id='CurrencyId'
              label={dictionary.CAMPO_MONETARIO}
              value={valueInitial}
              onChange={this.handleCurrencyChange(dictionary.VALOR_MONETARIO_MODIFICADO)}
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
            />
          </Typography>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Currency', () => {
    return <CurrencyStory/>
  })
