import { storiesOf } from '@storybook/react'
import Button from '@material-ui/core/Button'
import TextField from '../Inputs/TextField/textField'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import createMuiTheme from '@material-ui/core/es/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/es/styles/MuiThemeProvider'
import withTests from './withTests'
import 'tachyons/css/tachyons.min.css'
import * as validation from '../Core/validation'

const validator = new validation.Validator()

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400'
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00'
    }
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          borderBottomColor: '#ffcc00'
        }
      }
    }
  }
})

class EmailInputStory extends PureComponent {
  state = {
    value: ''
  }

  handleEmailChange = decorateAction([args => {
    this.setState({ value: args[0].target.value })
    return args
  }])

  render () {
    const { value } = this.state

    return (
      <div className='pl3'>
        <MuiThemeProvider theme={theme}>
          <h5> Campo Obrigatório </h5>
          <TextField
            required
            label='Email'
            onChange={this.handleEmailChange('Email Modificado')}
            name='email'
            validator={{ validator, type: validation.types.email }}
            value={value}
          />

          <h5> Campo Não obrigatório </h5>
          <TextField
            label='Email'
            onChange={this.handleEmailChange('Email Modificado')}
            name='email'
            validator={{ validator, type: validation.types.email }}
            value={value}
          />

          <h5> Campo sem mostrar erros </h5>
          <TextField
            label='Email'
            onChange={this.handleEmailChange('Email Modificado')}
            name='email'
            value={value}
            showHelper={false}
            validator={{ validator, type: validation.types.email }}
          />
          <br />
          <Button onClick={validator.validate} variant='contained'>
                  Validate
          </Button>
        </MuiThemeProvider>
      </div>

    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('email'))
  .add('Email Input', () => {
    return <EmailInputStory />
  })
