import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { styles } from '../../src/SeeTheme/styles/styles'
import { InitialScreen, Grid, Button, MuiThemeProvider, InputLabel, TextField, SeeTheme, Typography, BioFinanceiraTheme } from '../../src'
import withTests from './withTests'
import * as validation from '../../src/Core/validation'

const validator = new validation.Validator()

let seeThemeOverride = Object.assign({}, SeeTheme);
seeThemeOverride.overrides.MuiInputLabel.root = { ...seeThemeOverride.overrides.MuiInputLabel.root, color: styles.colors.white }
seeThemeOverride.overrides.MuiFormLabel.root = {
  '&$focused': {
    color: styles.colors.gray_04
  },
  '&$error': {
    color: styles.colors.red
  }
}
seeThemeOverride.overrides.MuiInput.underline = {
  '&:after': {
    borderBottomColor: styles.colors.gray_04
  },
  '&:before': {
    borderBottom: `1px solid ${styles.colors.gray_03}`
  },
  '&$error:after': {
    borderBottomColor: styles.colors.red
  },
  '&:hover:not($disabled):not($focused):not($error):before': {
    borderBottomColor: styles.colors.white
  }
}

class InitialScreenStory extends React.Component {
  state = {
    password: '',
    initialFields: true,
    insertEmail: false,
    sendedEmail: false,
    email: '',
  }

  handleEmail = (e) => {
    this.setState({email: e})
  }

  handlePassword = (e) => {
    this.setState({password: e})
  }

  handleForgotPassword = () => {
    this.setState({insertEmail: true, initialFields: false})
  }

  handleSendEmail = () => {
    this.setState({insertEmail: false, sendedEmail: true})
  }

  handleCancel = () => {
    this.setState({insertEmail: false, sendedEmail: false, initialFields: true})
  }

  /* Password input has a bug, needed to put this css to solve */
  getStyle () {
    return {
      marginTop: '13px'
    }
  }

  render() {
    const {password, initialFields, email, sendedEmail, insertEmail} = this.state

    return (
    <MuiThemeProvider theme={seeThemeOverride}>
      <InitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347a7c')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', true)}>
        <div className='flex z-2 justify-center w-100 h-100 justify-center items-center'>
          <div className='white pv4 pl4 mr5 dn db-ns'>
            <div className='brandon-regular lh-copy'>
              <p className='f4 mb2 rounded-elegance'>#ClienteMais</p>
              <p className='f3 ttu mt2 mb1'>Trabalhamos <br /> <span className='brandon-bold'>para você <br /></span>e para o
                seu dinheiro</p>
              <p className='f6 ttu mt2 lh-copy'>Seus investimentos e vida financeira <br /> aos cuidados de especialistas</p>
            </div>
            <p className='roboto-bold f6 b'>Conheça a Par Mais</p>
          </div>

          {initialFields ?
            <div className='bl-ns b--white-20 white roboto-medium pl5-ns pr5-ns mt4-ns'>
              <p className='f2 mb4 mt3 rounded-elegance dn-ns'>#ClienteMais</p>
              <p className='roboto-light f4'>Acesse sua conta</p>
              <div>
                <TextField
                  required
                  validator={{ validator, type: validation.types.email }}
                  style={{ width: '100%' }}
                  type='email'
                  value={email}
                  label='E-mail'
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: 'emailInput'
                  }}
                  onChange={(e) => {
                    this.handleEmail(e.target.value)
                  }} />

                <br/>

                <TextField
                  style={{ width: '100%', marginTop: '10px'}}
                  id='PasswordId'
                  autoComplete='current-password'
                  label='Senha'
                  InputLabelProps={{
                    shrink: true
                  }}
                  InputProps={{
                    className: 'passwordInput'
                  }}
                  type='password'
                  value={password}
                  onChange={(e) => {
                    this.handlePassword(e.target.value)
                  }}/>

                <a className='f7 f6-ns roboto-bold b mt4 mb4 lh-copy'
                   onClick={() => {
                     this.handleForgotPassword()
                   }}>
                  Esqueceu sua senha?<br />
                  Clique para receber uma nova em seu e-mail
                </a>
                <div className='flex justify-end'>
                  <Button
                    variant='contained'>
                    Continuar
                  </Button>
                </div>
              </div>
            </div> : ''
          }

          {insertEmail ?
            <div className='bl-ns b--white-20 white roboto-medium pl5-ns pr5-ns mt4-ns'>
              <p className='f2 mb4 mt3 rounded-elegance dn-ns'>#ClienteMais</p>
              <Typography variant='headline'> Enviaremos para o seu e-mail um link </Typography>
              <Typography variant='headline'> para você criar uma nova senha </Typography>

              <div className='mv3'>
                <InputLabel>Digite seu e-mail</InputLabel>
                <TextField
                  required
                  validator={{ validator, type: validation.types.email }}
                  style={{ width: '100%', marginTop: 0, marginBottom: '1rem'  }}
                  type='email'
                  value={email}
                  InputProps={{
                    className: 'emailInput'
                  }}
                  onChange={(e) => {
                    this.handleEmail(e.target.value)
                  }} />

                <Grid container
                      direction='row'
                      justify='space-between'
                      alignItems='flex-end'
                      id={'last-grid'}
                      style={{ height: '100%', marginTop: '5rem' }}>
                  <Grid item>
                    <Button variant='outlined'
                            color='secondary'
                            onClick={() => {
                              this.handleCancel()
                            }}>
                      Cancelar
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='contained'
                            onClick={() => {
                              this.handleSendEmail()
                            }}>
                      Continuar
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div> : ''
          }

          {sendedEmail ?
            <div className='bl-ns b--white-20 white roboto-medium pl5-ns pr5-ns mt4-ns'>
              <p className='f2 mb4 mt3 rounded-elegance dn-ns'>#ClienteMais</p>
              <Typography variant='headline'> Confira o seu e-mail </Typography>
              <Typography variant='subheading'> As instruções foram enviadas para </Typography>
              <Typography variant='subheading'> {email} </Typography>

              <div className='mt6'>
                <div className='flex justify-end'>
                  <Button
                    variant='contained'
                    onClick={() => {
                      this.handleCancel()
                    }}>
                    Continuar
                  </Button>
                </div>
              </div>
            </div> : ''
          }

        </div>
      </InitialScreen>
    </MuiThemeProvider>
  )
  }
}

storiesOf('InitialScreen', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('InitialScreen'))
  .add('Base', () => {
    return (
      <InitialScreen
        imageSrc={text('imageSrc', 'https://wallhalla.com/thumbs/preview/l/La748MeuPdY.jpg')}
        middleBoxColor={text('middleBoxColor', '#2b4e99')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', false)}>
        <h1 className='roboto-light white'>
          {text('Content', 'Content Here')}
        </h1>
      </InitialScreen>
    )
  })
  .add('BIO Financeira', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <InitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347A7C')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', true)}
        classes={text('classes', 'z-5')}>
        <Grid container wrap={'wrap'} alignItems='center' justify='center' className='white pa4-ns'>
          <Grid className='mr4-l tc'>
            <img className='w-50 w-80-l' src='https://static.parmais.com.br/images/see-logo.svg.png' />
          </Grid>
          <Grid className='flex flex-column roboto-light lh-copy' style={{width: 500}}>
            <Grid item>
              <h1 className='white brandon-light ttu mt2 fw1 tc tl-l'>
                <span className='brandon-bold'>Bio</span> Financeira
              </h1>
              <p>
                A BIO Financeira é a soma de seu perfil psicológico frente aos
                investimentos, momento de vida e capacidade financeira e patrimonial.
              </p>
              <p>
                Sabendo como está a sua BIO você poderá traçar estratégias de
                investimento mais seguras.
              </p>
              <p className='f6 i'>
                Ao clicar em "COMECE AGORA", você concorda com a nossa
                <i>
                  <b className='pointer' onClick={() => console.log('Abriu modal com política de privacidade')}> política de privacidade</b>
                </i>.
              </p>
            </Grid>
            <Grid className='flex justify-end'>
              <Button
                onClick={() => console.log('Clicou no botão "COMECE AGORA"')}
                variant='contained'
              >
                COMECE AGORA
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </InitialScreen>
      </MuiThemeProvider>
    )
  })
  .add('Minha Carteira', () => {
    return (
        <InitialScreenStory />
    )
  })

