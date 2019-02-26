import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { styles } from '../../../../src/SeeTheme/styles/styles'
import { 
    InitialScreen, 
    Grid, 
    Button, 
    MuiThemeProvider,  
    SeeTheme, 
    BioFinanceiraTheme
} from '../../../../src'
import withTests from '../../withTests'
import * as validation from '../../../../src/Core/validation'

const validator = new validation.Validator()

let seeThemeOverride = SeeTheme;
seeThemeOverride.overrides.MuiInputLabel.root = { ...seeThemeOverride.overrides.MuiInputLabel.root, color: styles.colors.white }
seeThemeOverride.overrides.MuiInputBase.input =  { ...seeThemeOverride.overrides.MuiInputBase.input, color: styles.colors.white }
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

storiesOf('Projects / Bio ', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('InitialScreen'))
  .add('InitialScreen', () => {
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
