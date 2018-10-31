import { storiesOf } from '@storybook/react'
import { TextField } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'

class PasswordStory extends PureComponent {
  state = {
    value: ''
  }

  handlePasswordChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  /* Password input has a bug, needed to put this css to solve */
  getStyle () {
    return {
      marginTop: '13px'
    }
  }

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
        <TextField
          id='PasswordId'
          autoComplete='current-password'
          type='password'
          label='Password'
          value={value}
          inputProps={{style: this.getStyle()}}
          onChange={this.handlePasswordChange('Password inserido')}/>
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Password', () => {
    return <PasswordStory/>
  })
