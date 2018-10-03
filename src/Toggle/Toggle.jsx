import React, { PureComponent } from 'react'
import SwitchMUI from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'

class Toogle extends PureComponent {
  render () {
    const { label } = this.props

    const proxyProps = { ...this.props }
    delete proxyProps.minWidth

    return (
      <FormControlLabel
        control={
          <SwitchMUI
            {...this.props} />
        }
        label={label}
      />
    )
  }
}

Toogle.defaultProps = {
  label: ''
}

export default Toogle
