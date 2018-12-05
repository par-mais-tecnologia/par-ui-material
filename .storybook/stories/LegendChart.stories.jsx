import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  MuiThemeProvider,
  BioFinanceiraTheme,
  LegendChart
} from '../../src'
import { walletExample } from '../../src/Core/mocks'
import { getStrategies } from '../../src/WalletChart/functions'
import withTests from './withTests'

class LegendChartStory extends PureComponent {
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

storiesOf('LegendChart', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('LegendChart'))
  .add('shallow', () => {
    const initialInvestment = 200000
    const strategies = getStrategies(initialInvestment, walletExample)
    return (
      <LegendChartStory>
        <LegendChart 
          initialInvestment={initialInvestment} 
          strategies={strategies} 
          showPercentage={boolean('showPercentage', true)}/>
      </LegendChartStory>
    )
  })
  .add('Minha Carteira', () => {
    const initialInvestment = 200000
    const strategies = getStrategies(initialInvestment, walletExample)

    return (
      <LegendChartStory>
        <LegendChart 
          initialInvestment={initialInvestment} 
          strategies={strategies} 
          showPercentage={boolean('showPercentage', false)}
          />
      </LegendChartStory>
    )
  })