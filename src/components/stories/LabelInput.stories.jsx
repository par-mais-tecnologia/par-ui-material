import { storiesOf } from '@storybook/react'
import LabelInput from '../Inputs/LabelInput/labelInput'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class LabelInputStory extends PureComponent {
  state = {
    value: ''
  }

  handleLabelInputChange = decorateAction([args => {
    this.setState({ value: args[0].target.value })
    return args
  }])

  render () {
    const { value } = this.state

    return (
        <div className='pl3'>
            <h5> Full width </h5>
            <LabelInput
                id='LabelInputId'
                label='Input com Label'
                minWidth='100%'
                value={value}
                onChange={this.handleLabelInputChange('Input Label alterado')}
            />

            <h5> Control width with text Helper</h5>
            <LabelInput
                id='LabelInputId'
                label='Input com Label'
                value={value}
                onChange={this.handleLabelInputChange('Input Label alterado')}
                maxWidth='50%'
                helperTex='Texto de apoio'
                showHelperText={true}
            />
        </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('labelInput'))
  .add('Label Input', () => {
    return <LabelInputStory />
  })
