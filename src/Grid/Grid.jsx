import React, { PureComponent } from 'react'
import GridMUI from '@material-ui/core/Grid'

export default class Grid extends PureComponent {
  render () {
    return (
      <GridMUI {...this.props} />
    )
  }
}
