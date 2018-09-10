import { storiesOf } from '@storybook/react'
import CheckBox from '../Inputs/CheckBox/checkBox'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class CheckBoxStory extends PureComponent {
  state = {
    checked: false
  }

  handleCheckedChange = decorateAction([args => {
    this.setState({ checked: args[1] })
    return args
  }])

  render () {
    const { checked } = this.state

    return (
      <CheckBox
        checked={checked}
        onChange={this.handleCheckedChange('marquei a caixa')}
        value='checked'
      />
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('checkBox'))
  .add('CheckBox', () => {
    return <CheckBoxStory />
  })
