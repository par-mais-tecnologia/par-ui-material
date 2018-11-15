import React from 'react'
import { storiesOf } from '@storybook/react'
import { 
  MuiThemeProvider,
  SeeTheme,
  SeeAppBar,
} from '../../src'

import withTests from './withTests'

class AppBarStories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialX: 0,
      isDragging: false,
      menuIsOpen: false
    }
    this.closeMenu = this.closeMenu.bind(this)
    this.openMenu = this.openMenu.bind(this)
  }

  closeMenu = () => {
    this.setState({ menuIsOpen: false })
  }

  openMenu = () => {
    this.setState({ menuIsOpen: true })
  }
  
  onDown = event => {
    this.setState({initialX: event.pageX, isDragging: true})
  }
  
  onUp = event => {
    const movedToRight = ((event.pageX - this.state.initialX)>0)
    this.setState({isDragging: false, initialX: 0, menuIsOpen: movedToRight})
  }
  
  render() {
    const name = 'Rui Cavaleiro'
    const lastUpdate = { date: '29/09/1989', time: '14:34' }
    const menuItems = [
      {
        item: 'SEUS OBJETIVOS',
        onClick: () => console.log('objetivos')
      },
      {
        item: 'INTELIGÊNCIA EM INVESTIMENTOS',
        onClick: () => console.log('inteligencia')
      },
      {
        item: 'INFORMAÇÕES',
        onClick: () => console.log('info')
      },
      {
        item: 'CONTATO',
        onClick: () => console.log('contato')
      }
    ]
    return (
      <div>
        <SeeAppBar 
          name={name}
          lastUpdate={lastUpdate}
          menuItems={this.props.withoutMenuItems ? [] : menuItems}
          handleExit={()=>console.log('exit')}
          menuIsOpen={this.state.menuIsOpen}
          closeMenu={this.closeMenu}
          openMenu={this.openMenu}
        />
        <div 
          style={{
            height:'400px',
            width:'100%',
            backgroundColor: 'red'
          }}
          onPointerUp={this.onUp}
          onPointerDown={this.onDown}
        />
      </div>
    )
  }
}

storiesOf('SeeAppBar', module)
  .addDecorator(withTests('AppBar'))
  .add('SeeAppBar', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarStories />
      </MuiThemeProvider>
    )
  })
  .add('SeeAppBar without MenuItems MVP', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarStories withoutMenuItems/>
      </MuiThemeProvider>
    )
  })