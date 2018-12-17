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

const styles = theme => ({
  ...theme.menu,
  toolbar: {
    paddingRight: '1em',
    paddingLeft: '1em',
    [theme.breakpoints.up('sm')]: {
      paddingRight: '4em',
      paddingLeft: '4em'
    }
  },
  iconButton: {
    [theme.breakpoints.up('md')]: {
      marginRight: '-15px'
    }
  }
})

class SeeAppBar extends React.Component {
  renderMenuItems = (menuItems, classes, selectedIndex) =>
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
            style={selectedIndex === index
              ? { color: '#347A7C', fontFamily: '\'Roboto Bold\', sans-serif' }
              : {}}
          >
            {item.item}
          </Typography>
        </MenuItem>
      ))
    )

  render () {
    const {
      name,
      lastUpdate,
      menuItems,
      handleExit,
      menuIsOpen,
      closeMenu,
      openMenu,
      selectedIndex,
      classes
    } = this.props

    return (
      <AppBar
        position='fixed'
        color='white'
      >
        <Toolbar classes={{ gutters: classes.toolbar }}>
          <div className='flex items-center justify-between w-100'>
            <div
              id='seeMenuMobile'
              className='dn-l'
              style={menuItems.length === 0 ? { visibility: 'hidden' } : {}}
            >
              <IconButton
                style={{ transform: 'scale(0.5)' }}
                onClick={openMenu}
              >
                <i className='gray par-icon-menu' />
              </IconButton>
              <SeeMenu
                name={name}
                lastUpdate={lastUpdate}
                menuItems={menuItems}
                isOpen={menuIsOpen}
                handleClose={closeMenu}
                handleExit={handleExit}
                selectedIndex={selectedIndex}
                className={`dn-l ${menuItems.length === 0 ? 'dn' : ''}`}
              />
            </div>
            <div>
              <img
                style={{ maxHeight: '20px' }}
                src='https://static.parmais.com.br/images/clientemais-logo.svg'
              />
            </div>
            <div className='dn flex-l'>
              {this.renderMenuItems(menuItems, classes, selectedIndex)}
            </div>
            <div className='flex items-center'>
              <div className='dn flex-l'>
                <Typography variant='body2' style={{ paddingBottom: '2px' }}>
                  {name}
                </Typography>
              </div>
              <IconButton
                onClick={handleExit}
                className='flex ph0 ph5-ns'
                style={{ backgroundColor: 'transparent', borderRadius: 0, outline: 0 }}
              >
                <div className='flex'>
                  <i style={{ transform: 'scale(0.9)', paddingTop: '1px' }} className='purple par-icon-leave pr1' />
                  <Typography variant='button' style={{ paddingTop: '1px' }}>SAIR</Typography>
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
