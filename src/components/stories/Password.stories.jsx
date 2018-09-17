import { storiesOf } from '@storybook/react'
import TextField from '../Inputs/TextField/textField'
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

    /* Password input has a bug, needed to put this css to solve */
    getStyle () {
      return {
        marginTop: '13px'
      }
    }

    render () {
      const { value } = this.state

      return (
        <div className='pl3'>
          <TextField
            id='PasswordId'
            autoComplete='current-password'
            type='password'
            label='Password'
            value={value}
            inputProps={{ style: this.getStyle() }}
            onChange={this.handlePasswordChange('Password inserido')} />
        </div>
      )
    }
}

storiesOf('Input', module)
  .addDecorator(withTests('Password'))
  .add('Password', () => {
    return <PasswordStory />
  })
