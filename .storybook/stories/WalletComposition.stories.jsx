import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  MuiThemeProvider,
  BioFinanceiraTheme,
  WalletComposition
} from '../../src'
import withTests from './withTests'
import { walletExample } from '../../src/Core/mocks'

class WalletCompositionStorie extends PureComponent {
  render () {
    const {children} = this.props
    return (
      <div className="w-100 pa2">
        <MuiThemeProvider theme={BioFinanceiraTheme}>
          <div>
            {children}
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('WalletComposition', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('WalletComposition'))
  .add('shallow', () => {
    return (
      <WalletCompositionStorie>
        <WalletComposition 
          data={walletExample}
        />
      </WalletCompositionStorie>
    )
  })