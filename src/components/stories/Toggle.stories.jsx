import { storiesOf } from '@storybook/react'
import Toogle from '../Inputs/Toggle/toggle'
import React, { PureComponent } from 'react'
import { decorateAction } from '@storybook/addon-actions'
import withTests from './withTests'

class ToogleStory extends PureComponent {
  state = {
    checked: true
  }

  handleToogleChange = decorateAction([args => {
    this.setState({ checked: args[0].target.checked })
    return args
  }])

  render () {
    const { checked } = this.state

    return (
      <div className='pl3'>
        <Toogle
          id='ToogleId'
          label='Campo de Toogle'
          value={checked}
          onChange={this.handleToogleChange('Toogle alterado')}
        />
      </div>
    )
  }
}

storiesOf('Input', module)
  .addDecorator(withTests('toogle'))
  .add('Toogle', () => {
    return <ToogleStory />
  })
