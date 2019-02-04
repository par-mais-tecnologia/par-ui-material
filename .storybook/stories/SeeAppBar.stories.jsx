import React from 'react'
import { storiesOf } from '@storybook/react'
import { 
  MuiThemeProvider,
  SeeTheme,
  SeeAppBar,
} from '../../src'

import withTests from './withTests'
import {isMobile} from '../../src/Core/functions'

class AppBarStories extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initialX: 0,
      isDragging: false,
      menuIsOpen: false,
      selectedIndex: ''
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
        onClick: () => this.setState({selectedIndex: 0})
      },
      {
        item: 'INTELIGÊNCIA EM INVESTIMENTOS',
        onClick: () => this.setState({selectedIndex: 1})
      },
      {
        item: 'INFORMAÇÕES',
        onClick: () => this.setState({selectedIndex: 2})
      },
      {
        item: 'CONTATO',
        onClick: () => this.setState({selectedIndex: 3})
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
          selectedIndex={this.state.selectedIndex}
          disabledExit={this.props.disabledExit}
        />
        <div 
          style={{
            height:'400px',
            width:'100%',
            backgroundColor: 'red',
            filter: this.state.menuIsOpen && isMobile() ? 'blur(2px)' : ''
          }}
          onPointerUp={this.onUp}
          onPointerDown={this.onDown}
        >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum elementum lorem sapien, eget euismod neque pellentesque eget. 
        Pellentesque ac quam vitae mi auctor aliquet. 
        Nam felis ante, lacinia eget elit nec, sollicitudin fringilla leo. 
        </div>
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
  .add('SeeAppBar without Exit Button', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <AppBarStories disabledExit = {true}/>
      </MuiThemeProvider>
    )
  })