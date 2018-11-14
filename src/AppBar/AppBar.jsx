import React from 'react'
import {
  Toolbar,
  IconButton,
  AppBar,
  Typography,
  withStyles,
  MenuItem
} from '@material-ui/core'

import {
  SeeMenu
} from '../'

const styles = theme => (theme.menu)

class SeeAppBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
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

  renderMenuItems = (menuItems, classes) =>
    (
      [...menuItems].map((item, index) => (
        <MenuItem
          onClick={item.onClick}
          classes={{ root: classes.menuItem }}
          key={`menuButtonDesktop-${index}`}
        >
          <Typography
            variant='body1'
            className='ph3'
            color='inherit'
            key={`menuItemDesktop-${index}`}
          >
            {item.item}
          </Typography>
        </MenuItem>
      ))
    )

  render () {
    const { name, lastUpdate, menuItems, handleExit, classes } = this.props
    return (
      <AppBar
        position='static'
        color='white'
      >
        <Toolbar>
          <div className='flex items-center justify-between w-100'>
            <div
              id='seeMenuMobile'
              className='dn-l'
              style={menuItems.length === 0 ? { visibility: 'hidden' } : {}}
            >
              <IconButton
                style={{ transform: 'scale(0.5)', marginLeft: '-20px' }}
                onClick={this.openMenu}
              >
                <i className='gray par-icon-menu' />
              </IconButton>
              <SeeMenu
                name={name}
                lastUpdate={lastUpdate}
                menuItems={menuItems}
                isOpen={this.state.menuIsOpen}
                handleClose={this.closeMenu}
                handleExit={handleExit}
              />
            </div>
            <div>
              <img
                style={{ maxHeight: '20px' }}
                src='https://static.parmais.com.br/images/clientemais-logo.svg'
              />
            </div>
            <div className='dn flex-l'>
              {this.renderMenuItems(menuItems, classes)}
            </div>
            <div className='flex items-center'>
              <div className='dn flex-l'>
                <Typography variant='body2'>
                  {name}
                </Typography>
              </div>
              <IconButton
                onClick={handleExit}
                className='flex'
                style={{ marginRight: '-16px' }}
              >
                <div className='flex'>
                  <i style={{ transform: 'scale(0.9)' }} className='purple par-icon-leave pr1' />
                  <Typography variant='button'>SAIR</Typography>
                </div>
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(SeeAppBar)
