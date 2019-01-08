import { storiesOf } from '@storybook/react'
import React, { PureComponent } from 'react'
import withTests from './withTests'
import IconBar from '../../src/IconBar'

class IconBarStory extends PureComponent {

  render () {
    return (
      <IconBar/>
    )
  }
}

storiesOf('IconBar', module)
  .addDecorator(withTests('IconBar'))
  .add('Icon Bar', () => {
    return <IconBarStory/>
  })