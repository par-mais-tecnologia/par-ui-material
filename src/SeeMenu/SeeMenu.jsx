import React from 'react'

import Button from '../Button'
import Typography from '@material-ui/core/Typography'

import {
  Menu,
  MenuItem,
  withStyles
} from '@material-ui/core'

const styles = theme => (theme.menu)

const SeeMenu = ({
  name,
  lastUpdate,
  menuItems,
  handleClose,
  handleExit,
  isOpen,
  className,
  selectedIndex,
  classes
}) => (
  <Menu
    id='simple-menu'
    open={isOpen}
    onClose={handleClose}
    disableAutoFocusItem
    anchorReference='anchorPosition'
    anchorPosition='left'
    className={className}
  >
    <div className='pl3 pt2'>
      <i className='gray par-icon-close' onClick={handleClose} />
    </div>
    <div className='flex flex-column mv4 ph3 items-center'>
      <Typography className='pb3' variant='overline'>
        {`${name}`}
      </Typography>
      <Button
        variant='contained'
        onClick={handleExit}>
        SAIR
      </Button>
    </div>
    <div className='mt1 mh3 bt bb bw-1' style={{ borderColor: '#E2E2E2' }}>
      {
        [...menuItems].map((item, index) => (
          <MenuItem
            onClick={item.onClick}
            disableGutters
            classes={{ root: classes.menuItem }}
            key={`menuItemMobile-${item.item}`}
          >
            <Typography
              variant='caption'
              className='w-100'
              color='inherit'
              style={selectedIndex === index
                ? { color: '#347A7C', fontFamily: '\'Roboto Bold\', sans-serif' }
                : {}}
            >
              {item.item}
            </Typography>
          </MenuItem>
        ))
      }
    </div>
    <div className='flex flex-column ph3 mv3'>
      <Typography variant='overline'>AMBIENTE ATUALIZADO DIARIAMENTE</Typography>
      <Typography variant='body1'>Última atualização</Typography>
      <Typography variant='body1'>{`${lastUpdate.date} às ${lastUpdate.time}`}</Typography>
    </div>
  </Menu>
)

export default withStyles(styles)(SeeMenu)
