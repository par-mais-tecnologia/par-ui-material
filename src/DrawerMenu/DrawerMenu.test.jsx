import React, { useState } from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import DrawerMenu from './DrawerMenu'
import { Button } from '../index'

configure({ adapter: new Adapter() })

const DrawerMenuTest = ({ isOpen }) => {
  const [menuIsOpen, handleMenuOpen] = useState(isOpen)
  const menuItems = [
    {
      name: 'MEUS OBJETIVOS',
      onClick: () => console.log('Clicou em MEUS OBJETIVOS')
    },
    {
      name: 'TRANSAÇÕES',
      onClick: () => console.log('Clicou em TRANSAÇÕES')

    },
    {
      name: 'INTELIGÊNCIA',
      onClick: () => console.log('Clicou em INTELIGÊNCIA')
    },
    {
      name: 'INFORMAÇÕES',
      onClick: () => console.log('Clicou em INFORMAÇÕES')
    },
    {
      name: 'CONTATO',
      onClick: () => console.log('Clicou em CONTATO')
    }
  ]

  const openMenu = () => {
    handleMenuOpen(true)
  }

  const closeMenu = () => {
    handleMenuOpen(false)
  }

  return (
    <div className='ma4'>
      <Button
        onClick={() => handleMenuOpen(true)}>
        Open Menu
      </Button>
      <DrawerMenu
        menuItems={menuItems}
        isOpen={menuIsOpen}
        openMenu={openMenu}
        closeMenu={closeMenu}
        name={'João da Silveira'}
        handleExit={() => console.log('Click Exit button')}
        lastUpdateDate={'25/02/2019'}
      />
    </div>
  )
}

export const test = describe('DrawerMenu', () => {
  it('shallow DrawerMenu', () => {
    const wrapper = shallow(<DrawerMenuTest isOpen />)
    expect(wrapper).toBeTruthy()
  })
})
