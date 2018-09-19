import React, { PureComponent } from 'react'
import CheckboxMUI from '@material-ui/core/Checkbox'

export default class CheckBox extends PureComponent {
  render () {
    return (
      <CheckboxMUI {...this.props} />
    )
  }
}
