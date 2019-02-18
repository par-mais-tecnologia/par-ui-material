import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { SeeAppBar, SeeTheme } from '../../src'
import { MuiThemeProvider } from '@material-ui/core'
import withTests from './withTests'

const AppBarComponent = () => {
  const [menuIsOpen, handleMenuOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState('')

  const menuItems = [
    {
      name: 'MEUS OBJETIVOS',
      onClick: () => setSelectedIndex(0)
    },
    {
      name: 'TRANSAÇÕES',
      onClick: () => setSelectedIndex(1)

    },
    {
      name: 'INTELIGÊNCIA',
      onClick: () => setSelectedIndex(2)

    },
    {
      name: 'INFORMAÇÕES',
      onClick: () => setSelectedIndex(3)

    },
    {
      name: 'CONTATO',
      onClick: () => setSelectedIndex(4)

    }
  ]

  const openMenu = () => {
    handleMenuOpen(true)
  }

  const closeMenu = () => {
    handleMenuOpen(false)
  }

  return (
    <SeeAppBar
      menuItems={menuItems}
      isOpen={menuIsOpen}
      openMenu={openMenu}
      closeMenu={closeMenu}
      name={'João da Silveira'}
      selectedIndex={selectedIndex}
      lastUpdateDate={'25/02/2019'} />
  )
}

storiesOf('SeeAppBar', module)
  .addDecorator(withTests('AppBar'))
  .add('SeeAppBar with SeeTheme', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarComponent />
      </MuiThemeProvider>
      )
  })