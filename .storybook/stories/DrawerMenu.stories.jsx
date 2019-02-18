import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { MuiThemeProvider } from '@material-ui/core'

import { DrawerMenu, Button, SeeTheme } from '../../src'

const DrawerMenuStory = () => {
  const [menuIsOpen, handleMenuOpen] = useState(false)

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
      onClick: () => console.log('Clicou em INTELIGÊNCIA'),
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

storiesOf('DrawerMenu', module)
  .add('shallow', () => {
    return (
      <DrawerMenuStory />
    )
  })
  .add('with SeeTheme', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <DrawerMenuStory />
      </MuiThemeProvider>
    )
  })
