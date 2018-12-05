import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import withTests from './withTests'
import { Donut } from '../../src/index'

class ChartStory extends PureComponent {
  render () {
    return (
      <div className='pl3'>
        {this.props.children}
      </div>
    )
  }
}

storiesOf('Charts', module)
  .add('Donut', () => {
    return (
      <ChartStory>
        <Donut />
      </ChartStory>
    )
  })
