import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { BaseInitialScreen, BioInitialScreen } from '../../src'
import withTests from './withTests'

storiesOf('InitialScreen', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('BioInitialScreen'))
  .add('BioInitialScreen', () => {
    return (
      <BaseInitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347A7C')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', true)}>
        <BioInitialScreen/>
      </BaseInitialScreen>
    )
  })
