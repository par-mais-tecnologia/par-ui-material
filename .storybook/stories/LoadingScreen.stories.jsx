import React from 'react'
import { storiesOf } from '@storybook/react'
import { InitialScreen, RotatingImage, BioFinanceiraTheme, Grid, MuiThemeProvider } from '../../src'

storiesOf('Loading screen', module)
  .add('Rotating Image', () =>{ 
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <InitialScreen
          imageSrc={'https://static.parmais.com.br/images/background.jpg'}
          middleBoxColor='#5EB8C0'
          middleBoxFullScreen={true}
          middleBoxFullScreenMobile={true}>

          <Grid
            container 
            direction='column' 
            justify='center'
            alignItems='center'
            className='w-100 h-100 white roboto-light f3'
            spacing={16}
          > 
            <Grid item style={{textAlign: 'center'}}>
              Carregando sua <b>BIO Financeira</b>
            </Grid>
            <Grid item>
              <RotatingImage
                imageUrl={'https://static.parmais.com.br/images/see-logo-2.svg'}
                width={'150px'}
                height={'150px'}
              />
            </Grid>
          </Grid>
          
        </InitialScreen>
      </MuiThemeProvider>
    )
  })