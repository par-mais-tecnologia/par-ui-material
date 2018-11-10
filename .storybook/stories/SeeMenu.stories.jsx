import React from 'react'

import { storiesOf } from '@storybook/react'
import Button from '@material-ui/core/Button'

import { SeeMenu, MuiThemeProvider, SeeTheme } from '../../src'

const menuItems = [
  {
    item: 'SEUS OBJETIVOS',
    onClick: () => {}
  },
  {
    item: 'INTELIGÊNCIA EM INVESTIMENTOS',
    onClick: () => {}
  },
  {
    item: 'INFORMAÇÕES',
    onClick: () => {}
  },
  {
    item: 'CONTATO',
    onClick: () => {}
  }
]

class MenuStories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: true
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleClick = () => {
    this.setState( { isOpen: true })
  }

  render() {
    return (
      <div>
        <Button
          aria-owns='simple-menu'
          aria-haspopup
          onClick={this.handleClick}>
          Open Menu
        </Button>
        <SeeMenu 
          name='Rui Cavaleiro'
          lastUpdate={{date: '29/09/1989', time: '14:34'}}
          menuItems={menuItems}
          isOpen={this.state.isOpen}
          handleClose={ this.handleClose }
        />
      </div>
    )
  }
}

storiesOf('SeeMenu', module)
  .add('SeeMenu', () => {
    return (
      <MenuStories />
    )
  })
  .add('SeeMenu with See Theme', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <MenuStories />
      </MuiThemeProvider>
    )
  })