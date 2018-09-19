import { storiesOf } from '@storybook/react'
import { TextField } from '../../src'

import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class GenericStory extends PureComponent {
  state = {
    value: ''
  }

  handleGenericChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
        <TextField
          id='GenericId'
          label='Campo Genérico'
          value={value}
          onChange={this.handleGenericChange('Valor genérico alterado')}
        />
      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Livre', () => {
    return <GenericStory/>
  })
