import React from 'react'

import Button from '../Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

const SeeMenu = ({ name, lastUpdate, menuItems, handleClose, handleExit, isOpen }) => (
  <Menu
    id='simple-menu'
    open={isOpen}
    onClose={handleClose}
    disableAutoFocusItem
    anchorReference='anchorPosition'
    anchorPosition='left'>
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
        [...menuItems].map(item => (
          <MenuItem onClick={item.onClick}>
            <Typography variant='body1' style={{ marginLeft: '-16px' }}>
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

export default SeeMenu
