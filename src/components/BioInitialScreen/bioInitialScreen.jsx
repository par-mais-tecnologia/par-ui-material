import React from 'react'

import '../Core/styles/index.css'
import Button from '@material-ui/core/Button'

const BioInitialScreen = (props) => {
  return (
    <div className='flex justify-center items-center flex-wrap w-100'>
      <div className='logo pv0 pv4-ns ph4 ph0-ns tc'>
        <img
          className='w-60 w-80-ns'
          src='https://static.parmais.com.br/images/see-logo.svg.png'
        />
      </div>
      <div className='description pa4-ns mw6-ns w-100'>
        <h1 className='white brandon-light ttu mt2'><span className='brandon-regular'>Bio</span> Financeira</h1>
        <div className='white roboto-light lh-copy'>
          <p>
            A BIO Financeira é a soama de seu perfil psicológico frente aos
            investimentos, momento de vida e capacidade financeira e patrimonial.
          </p>
          <p>
            Sabendo como está a sua BIO você poderá traçar estratégias de
            investimento mais seguras.
          </p>
          <p>
            Ao clicar em "Começar", você concorda com a nossa
            <i><b> política de privacidade</b></i>.
          </p>
        </div>
        <div className='flex justify-end'>
          <Button variant='contained' color='secondary'>
            COMEÇAR
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BioInitialScreen
