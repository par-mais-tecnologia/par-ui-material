import { storiesOf } from '@storybook/react'
import { CheckBox } from '../../src'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class CheckBoxStory extends PureComponent {
  state = {
    checked: false
  }

  handleCheckedChange = decorateAction([args => {
    this.setState({checked: args[1]})
    return args
  }])

  render () {
    const {checked} = this.state

    return (
      <div className='pl3'>
        <CheckBox
          checked={checked}
          onChange={this.handleCheckedChange('marquei a caixa')}
          value='checked'
        />
      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('CheckBox'))
  .add('CheckBox', () => {
    return <CheckBoxStory/>
  })
