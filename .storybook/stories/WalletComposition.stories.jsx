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
import {SeeTheme} from '../../src/index'

class WalletCompositionStorie extends PureComponent {
  render () {
    const {children, theme} = this.props
    return (
      <div className="w-100 pa2">
        <MuiThemeProvider theme={theme}>
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
      <WalletCompositionStorie theme={SeeTheme}>
        <WalletComposition 
          data={walletExample}
        />
      </WalletCompositionStorie>
    )
  })