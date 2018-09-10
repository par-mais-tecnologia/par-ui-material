import React from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

import 'tachyons/css/tachyons.min.css'
import '../../../Core/styles/index.css'

const MyWalletLoginView = (props) => {
  return (
    <div className='flex'>
      <div className='white pv4 pl4 mr5'>
        <div className='brandon-regular lh-copy'>
          <p className='f4 mb2 rounded-elegance'>#ClienteMais</p>
          <p className='f3 ttu mt2 mb1'>Trabalhamos <br /> <span className='brandon-bold'>para você <br /></span>e para o
            seu dinheiro</p>
          <p className='f6 ttu mt2 lh-copy'>Seus investimentos e vida financeira <br /> aos cuidados de especialistas</p>
        </div>
        <p className='roboto-bold f6 b'>Conheça a Par Mais</p>
      </div>
      <div className='bl b--white-20 white roboto-medium pl5 pr5 mt4'>
        <p className='roboto-light f4'>Acessar conta</p>
        <div>
          <Input
            placeholder='E-mail'
            fullWidth
            className='mb2'
          />
          <br />
          <Input
            placeholder='Senha'
            fullWidth
          />
          <p className='f7 b mt4 mb4 lh-copy'>
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

export default MyWalletLoginView
