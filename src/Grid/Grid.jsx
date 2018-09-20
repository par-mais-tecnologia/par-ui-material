import React, { PureComponent } from 'react'
import GridMUI from '@material-ui/core/Grid'

class Grid extends PureComponent {
  render () {
    return (
      <GridMUI {...this.props} />
    )
  }
}

export default Grid
