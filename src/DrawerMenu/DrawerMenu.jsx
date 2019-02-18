import React from 'react'
import PropTypes from 'prop-types'
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Typography
} from '../index'
import { IconButton, withStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => (theme.appBar)

const DrawerMenu = (
  { isOpen, closeMenu, handleExit, openMenu, classes, name,
    menuItems, selectedIndex, lastUpdateDate }) => {
  return (
    <div>
      <SwipeableDrawer open={isOpen} onClose={closeMenu} onOpen={openMenu}>
        <div className='flex flex-column'>
          <div className='pa3'>
            <IconButton
              color='inherit'
              aria-label='Close'
              className={classes.closeIcon}
              onClick={() => closeMenu()}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className='tc mb4'>
            <Typography variant='overline' style={{ color: '#636363' }}>
              {name}
            </Typography>
            <Button
              variant='contained'
              onClick={handleExit}>
              SAIR
            </Button>
          </div>
          { menuItems.length > 0 ? <div><Divider style={{ margin: '10px 0 10px 0' }} />
            <div>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem
                    button
                    className={classes.listItem}
                    key={`menuItemMobile-${item.name}`}
                    onClick={() => {
                      closeMenu()
                      item.onClick()
                    }}>
                    <ListItemText>
                      <Typography
                        className={classes.listItemText}
                        variant='caption'
                        style={selectedIndex === index
                          ? { color: '#347A7C', fontFamily: '\'Roboto Bold\', sans-serif' }
                          : {}}>
                        {item.name}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </div></div> : ''}
          <Divider style={{ margin: '10px 0 0 0' }} />
          <div style={{ padding: '15px 16px 30px 16px' }}>
            <p className='ttu roboto-bold mr3' style={{ fontSize: 13, color: '#636363' }}>
              Ambiente atualizado diariamente
            </p>
            <Typography variant='body1' style={{ whiteSpace: 'pre-line' }}>
              {`Última atualização ${lastUpdateDate}`}
            </Typography>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  )
}

DrawerMenu.defaultProps = {
  isOpen: false
}

DrawerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.object,
  closeMenu: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  handleExit: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number,
  lastUpdateDate: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }))
}

export default withStyles(styles)(DrawerMenu)
