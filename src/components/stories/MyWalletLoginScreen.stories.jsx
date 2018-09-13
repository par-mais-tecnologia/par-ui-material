import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import BaseInitialScreen from '../BaseInitialScreen/baseInitialScreen'
import MyWalletLoginScreen from '../MyWalletLoginScreen/myWalletLoginScreen'
import withTests from './withTests'

storiesOf('InitialScreen', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('myWalletLoginScreen'))
  .add('MyWalletLoginScreen', () => {
    return (
      <BaseInitialScreen
        imageSrc={text('imageSrc', 'https://static.parmais.com.br/images/background.jpg')}
        middleBoxColor={text('middleBoxColor', '#347A7C')}
        middleBoxFullScreen={boolean('middleBoxFullScreen', false)}
        middleBoxFullScreenMobile={boolean('middleBoxFullScreenMobile', false)}>
        <MyWalletLoginScreen />
      </BaseInitialScreen>
    )
  })
