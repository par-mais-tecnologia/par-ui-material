import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { InitialScreen } from '../../src'
import withTests from './withTests'
import Grid from '@material-ui/core/Grid/Grid'
import Button from '@material-ui/core/Button/Button'
import Input from '@material-ui/core/Input/Input'

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
      <InitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347A7C')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', true)}
        classes={text('classes', 'z-5')}>
        <Grid container wrap alignItems='center' justify='center' className='white pa4-ns'>
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
                color='secondary'>
                COMECE AGORA
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </InitialScreen>
    )
  })
  .add('Minha Carteira', () => {
    return (
      <InitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347A7C')}
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
          <div className='bl-ns b--white-20 white roboto-medium pl5-ns pr5-ns mt4-ns'>
            <p className='f2 mb4 mt3 rounded-elegance dn-ns'>#ClienteMais</p>
            <p className='roboto-light f4'>Acesse sua conta</p>
            <div>
              <Input
                placeholder='E-mail'
                fullWidth
                className='mb3'
              />
              <br />
              <Input
                placeholder='Senha'
                fullWidth
              />
              <p className='f7 f6-ns roboto-bold b mt4 mb4 lh-copy'>
                Esqueceu sua senha?<br />
                Clique para receber uma nova em seu e-mail
              </p>
              <div className='flex justify-end'>
                <Button variant='contained' color='secondary'>
                  Continuar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </InitialScreen>
    )
  })
