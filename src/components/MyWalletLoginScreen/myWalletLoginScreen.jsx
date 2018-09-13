import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import '../Core/styles/index.css'

const MyWalletLoginScreen = (props) => {
  return (
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
  )
}

export default MyWalletLoginScreen
