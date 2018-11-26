import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { MuiThemeProvider, SeeTheme, Typography } from '../../src'
import { InputLabel, TextField, Paper, Button } from '../../src';

class PasswordDefinitionView extends PureComponent {
  state = {
    password: '',
    passwordConfirm: ''
  }

  handleInputChange = (value, field) => {
    this.setState({[field]: value})
  }

  render () {

    const { password, passwordConfirm } = this.state

    return (
      <MuiThemeProvider theme={SeeTheme}>
        <div className='flex justify-center mb5'>
          <div className='w-100 w-40-ns'>
            <Typography variant='title' className='tc pa4'>
              Defina sua senha
            </Typography>
            <Paper className='pt4 ph4 pb5 ph5-l pb6-l'>
              <Typography variant='body1'>
                Sua senha deve ter pelo menos 6 caracteres,<br />
                contendo pelo menos um número e um símbolo
              </Typography>
              <div className='mt5'>
                <InputLabel>Digite a nova senha</InputLabel>
                <TextField
                  required
                  InputLabelProps={{ shrink: true }}
                  style={{ width: '100%', marginTop: '0' }}
                  onChange={(e) => {
                    this.handleInputChange(e.target.value, 'password')
                  }}
                  type='password'
                  value={password}/>
              </div>
              <div className='mt4'>
                <InputLabel>Confirme sua nova senha</InputLabel>
                <TextField
                  required
                  InputLabelProps={{ shrink: true }}
                  style={{ width: '100%', marginTop: '0' }}
                  onChange={(e) => {
                    this.handleInputChange(e.target.value, 'passwordConfirm')
                  }}
                  type='password'
                  value={passwordConfirm}/>
              </div>
            </Paper>
            <div className='flex justify-between mt5'>
              <div>
                <Button
                  onClick={() => console.log('Clicou no botão "CANCELAR"')}
                  variant='outlined'
                  color='secondary'>
                  Cancelar
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => console.log('Clicou no botão "CONFIRMAR"')}
                  variant='contained'
                  color='secondary'>
                  Confirmar
              </Button>
              </div>
            </div>
          </div>
        </div>
        </MuiThemeProvider>
    )
  }
}

storiesOf('SEE - Minha Carteira', module)
  .addDecorator(withKnobs)
  .add('1 - Definição de Senha', () => {
    return <PasswordDefinitionView/>
  })