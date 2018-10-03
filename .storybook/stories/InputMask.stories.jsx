import { storiesOf } from '@storybook/react'
import { InputMask } from '../../src'

import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'

class InputMaskStory extends PureComponent {
  state = {
    value: ''
  }

  handleInputMaskChange = decorateAction([args => {
    this.setState({value: args[0].target.value})
    return args
  }])

  render () {
    const {value} = this.state

    return (
      <div className='pl3'>
        <InputMask
          id='MaskInputId'
          label='Mask Input of People'
          typeMask='people'
          value={value}
          onChange={this.handleInputMaskChange('Input Label alterado')}
        />
        <br/>
        <InputMask
          id='MaskInputId'
          label='Mask Input of Years'
          typeMask='years'
          value={value}
          onChange={this.handleInputMaskChange('Input Label alterado')}
        />

      </div>
    )
  }
}

storiesOf('Input', module)
  .add('Input Mask', () => {
    return <InputMaskStory/>
  })
