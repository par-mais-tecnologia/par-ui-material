import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  WalletChart,
  MuiThemeProvider,
  BioFinanceiraTheme,
} from '../../../../src'
import { walletExample } from '../../../../src/Core/mocks'

storiesOf('Components / Charts', module)
  .add('WalletChart - Donut', () => {
    return (
      <MuiThemeProvider theme={BioFinanceiraTheme}>
        <div className="w-100 h-100 pa2">
          <WalletChart 
          initialInvestment={200000} 
          labelFirstLine='INVESTIMENTOS' 
          labelSecondLine='do José da Silva' 
          wallet={walletExample}
          showLegendPercentage={true}/>
        </div>
      </MuiThemeProvider>
    )
  })