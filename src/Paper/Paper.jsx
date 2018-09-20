import React, { PureComponent } from 'react'
import PaperMUI from '@material-ui/core/Paper'

class Paper extends PureComponent {
  render () {
    return (
      <PaperMUI {...this.props} />
    )
  }
}

export default Paper
