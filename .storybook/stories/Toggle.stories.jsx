import { storiesOf } from '@storybook/react'
import { Toggle } from '../../src'

import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class ToggleStory extends PureComponent {
  state = {
    checked: true
  }

  handleToggleChange = decorateAction([args => {
    this.setState({checked: args[0].target.checked})
    return args
  }])

  render () {
    const {checked} = this.state

    return (
      <div className='pl3'>
        <Toggle
          id='ToggleId'
          label='Campo de Toggle'
          value={checked}
          onChange={this.handleToggleChange('Toggle alterado')}
        />
      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('Toggle'))
  .add('Toggle', () => {
    return <ToggleStory/>
  })
