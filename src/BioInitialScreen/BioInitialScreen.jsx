import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid/Grid'

import '../Core/styles/index.css'

const BioInitialScreen = (props) => {
  return (
    <Grid container justify='center' alignItems='center' wrap className='w-100 h-100'>
      <Grid item className='logo pv0 pv4-ns ph4 ph0-ns tc'>
        <img className='w-60 w-80-ns' src='https://static.parmais.com.br/images/see-logo.svg.png' />
      </Grid>
      <Grid item className='description pa4-ns mw6-ns w-100'>
        <h1 className='white brandon-light ttu mt2 fw1'><span className='brandon-bold'>Bio</span> Financeira</h1>
        <Grid className='white roboto-light lh-copy'>
          <p>
            A BIO Financeira é a soama de seu perfil psicológico frente aos
            investimentos, momento de vida e capacidade financeira e patrimonial.
          </p>
          <p>
            Sabendo como está a sua BIO você poderá traçar estratégias de
            investimento mais seguras.
          </p>
          <p className='f6 i'>
            Ao clicar em "Começar", você concorda com a nossa
            <i><b> política de privacidade</b></i>.
          </p>
        </Grid>
        <Grid container justify='flex-end' className='mt4 mt0-ns'>
          <Button variant='contained' color='secondary'>
            COMECE AGORA
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BioInitialScreen
