import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import {
  WalletChart,
  MuiThemeProvider,
  BioFinanceiraTheme,
} from '../../src'
import { walletExample } from '../../src/Core/mocks'

class WalletChartStory extends PureComponent {
  render() {
    const { children } = this.props
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

storiesOf('WalletChart', module)
  .add('shallow', () => {
    return (
      <WalletChartStory>
          <WalletChart initialInvestment={200000} labelFirstLine='INVESTIMENTOS' labelSecondLine='do José da Silva' wallet={walletExample}/>
      </WalletChartStory>
    )
  })