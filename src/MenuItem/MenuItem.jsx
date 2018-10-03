import React, { PureComponent } from 'react'
import MenuItemMUI from '@material-ui/core/MenuItem'

class MenuItem extends PureComponent {
  render () {
    return (
      <MenuItemMUI {...this.props} />
    )
  }
}

export default MenuItem
