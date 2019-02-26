import React from 'react'
import { storiesOf } from '@storybook/react'
import { MyWalletLoading } from '../../../../src'

storiesOf('Projects / My Wallet ', module)
  .add('Loading screen', () => {
    return (
      <MyWalletLoading/>
    )
  })