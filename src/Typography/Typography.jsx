import React, { PureComponent } from 'react'
import TypographyMUI from '@material-ui/core/Typography'

class Typography extends PureComponent {
  render () {
    return (
      <TypographyMUI {...this.props} />
    )
  }
}

export default Typography
