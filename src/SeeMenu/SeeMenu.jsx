import React from 'react'
import PropTypes from 'prop-types'

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
  menuItems,
  handleClose,
  handleExit,
  isOpen,
  className,
  selectedIndex,
  mobileFooterTitle,
  mobileFooterBody,
  classes
}) => (
  <Menu
    id='simple-menu'
    open={isOpen}
    onClose={handleClose}
    disableAutoFocusItem
    anchorReference='anchorPosition'
    anchorPosition={{ left: 'left' }}
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
      <Typography variant='overline'>{mobileFooterTitle.toUpperCase()}</Typography>
      <Typography variant='body1' style={{ whiteSpace: 'pre-line' }}>{mobileFooterBody}</Typography>
    </div>
  </Menu>
)

SeeMenu.defaultProps = {
  isOpen: false
}

SeeMenu.propTypes = {
  name: PropTypes.string,
  menuItems: PropTypes.array,
  handleClose: PropTypes.func,
  handleExit: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  mobileFooterTitle: PropTypes.string,
  mobileFooterBody: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SeeMenu)
