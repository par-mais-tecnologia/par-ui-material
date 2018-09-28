import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

import { BioFinanceiraTheme, Button } from '../../src'
import { MuiThemeProvider } from '@material-ui/core'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)

storiesOf('Button', module)
  .add('contained', () =>
    <MuiThemeProvider theme={BioFinanceiraTheme}>
      <div style={{padding: '50px'}}>
        <Button variant='contained'>
          AVANÇAR
        </Button>
      </div>
    </MuiThemeProvider>)
  .add('outlined', () => (
    <MuiThemeProvider theme={BioFinanceiraTheme}>
      <div style={{padding: '50px'}}>
        <Button
          onClick={action('clicked')}
          variant='outlined'
        >
          VOLTAR
        </Button>
      </div>
    </MuiThemeProvider>
  ))
