import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import ButtonPar from '../Button/index'

import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme"
import finBioTheme from '../themes/bioFinanceira/theme'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('contained', () =>
  <MuiThemeProvider theme={finBioTheme}>
    <div style={{padding: '50px'}}>
      <ButtonPar variant='contained'>
        AVANÇAR
      </ButtonPar>
    </div>
  </MuiThemeProvider>)
  .add('outlined', () => (
    <MuiThemeProvider theme={finBioTheme}>
      <div style={{padding: '50px'}}>
        <ButtonPar 
          onClick={action('clicked')} 
          variant='outlined' 
        >
          VOLTAR
        </ButtonPar>
      </div>
    </MuiThemeProvider>
  ))
