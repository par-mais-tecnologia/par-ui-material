import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import {
  SeeTheme,
  BioFinanceiraTheme,
  Button,
  MuiThemeProvider
} from '../../src'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>)

storiesOf('Button', module)
  .add('simple', () =>
      <div style={{padding: '50px'}}>
        <Button variant='contained'>
          AVANÇAR
        </Button>
        <Button
          onClick={action('clicked')}
          variant='outlined'
        >
          VOLTAR
        </Button>
      </div>)
  .add('bio financeira', () =>
    <MuiThemeProvider theme={BioFinanceiraTheme}>
      <div style={{padding: '50px'}}>
        <Button variant='contained'>
          AVANÇAR
        </Button>
        <Button
          onClick={action('clicked')}
          variant='outlined'
        >
          VOLTAR
        </Button>
      </div>
    </MuiThemeProvider>)
  .add('see', () => (
    <MuiThemeProvider theme={SeeTheme}>
      <div style={{padding: '50px'}}>
        <Button variant='contained'>
          AVANÇAR
        </Button>
        <Button
          onClick={action('clicked')}
          variant='outlined'
        >
          VOLTAR
        </Button>
      </div>
    </MuiThemeProvider>
  ))
