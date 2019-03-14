import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ExitIcon from '@material-ui/icons/ExitToApp'
import DrawerMenu from '../DrawerMenu'

const styles = theme => ({
  ...theme.appBar
})

const SeeAppBar = (
  { classes, menuItems, selectedIndex, isOpen, openMenu, handleExit,
    closeMenu, name, lastUpdateDate, onClickLogo }) => {
  const renderMenuItems = (menuItems, selectedIndex) => {
    return (
      [...menuItems].map((item, index) => (
        <MenuItem
          onClick={item.onClick}
          classes={{ root: classes.menuItem }}
          key={`menuButtonDesktop-${index}`}
          style={selectedIndex === index ? { backgroundColor: '#FFFFFF' } : {}}>
          <Typography
            variant='caption'
            className='ph3'
            color='inherit'
            key={`menuItemDesktop-${index}`}
            style={selectedIndex === index
              ? { color: '#347A7C', fontFamily: '\'Roboto Bold\', sans-serif' }
              : {}}>
            {item.name}
          </Typography>
        </MenuItem>
      ))
    )
  }

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={`${classes.toolBar} ${menuItems.length === 0 ? 'justify-between' : ''}`}>
        <div
          id='seeMenuMobile'
          className='flex dn-l'
          style={{ width: '33.33%' }}>
          <IconButton
            color='inherit'
            className={classes.menuIcon}
            aria-label='Menu'
            onClick={() => openMenu()}>
            <MenuIcon />
          </IconButton>
          <DrawerMenu
            name={name}
            handleExit={handleExit}
            isOpen={isOpen}
            openMenu={openMenu}
            closeMenu={closeMenu}
            menuItems={menuItems}
            lastUpdateDate={lastUpdateDate}
            selectedIndex={selectedIndex} />
        </div>
        <div className='flex justify-center' style={{ width: '33.33%', cursor: 'pointer' }} onClick={onClickLogo}>
          <img
            alt={'Logo Par Mais'}
            style={{ maxHeight: '20px', minWidth: '125px' }}
            src='https://static.parmais.com.br/images/clientemais-logo.svg'
          />
        </div>
        <div className='dn flex-l'>
          {renderMenuItems(menuItems, selectedIndex)}
        </div>
        <div className='flex justify-center' style={{ width: '33.33%' }}>
          <div className='dn flex-l items-center'>
            <Typography
              component='div'
              variant='body2'>
              {name.split(' ')[0]}
            </Typography>
            <div className='flex items-center pointer' onClick={handleExit}>
              <ExitIcon className={`${classes.exitIcon} pointer ml2 mr2`} />
              <Typography
                className='pointer'
                component='div'
                variant='button'>
                SAIR
              </Typography>
            </div>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(SeeAppBar)
