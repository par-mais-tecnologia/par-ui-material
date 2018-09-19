import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { BaseInitialScreen } from '../../src'
import withTests from './withTests'

storiesOf('InitialScreen', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('BaseInitialScreen'))
  .add('BaseInitialScreen', () => {
    return (
      <BaseInitialScreen
        imageSrc={text('imageSrc', 'https://wallhalla.com/thumbs/preview/l/La748MeuPdY.jpg')}
        middleBoxColor={text('middleBoxColor', '#2b4e99')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', false)}>
        <h1 className='roboto-light white'>
          {text('Content', 'Content Here')}
        </h1>
      </BaseInitialScreen>
    )
  })
