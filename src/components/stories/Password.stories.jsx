import { storiesOf } from '@storybook/react'
import Password from '../Inputs/Password/password'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class PasswordStory extends PureComponent {
  state = {
    value: ''
  }

  handlePasswordChange = decorateAction([args => {
    this.setState({ value: args[0].target.value })
    return args
  }])

  render () {
    const { value } = this.state

    return (
      <Password
        id='PasswordId'
        autoComplete="current-password"
        type="password"
        label='Password'
        margin="normal"
        value={value}
        onChange={this.handlePasswordChange('Password inserido')}
      />
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('Password'))
  .add('Password', () => {
    return <PasswordStory />
  })
