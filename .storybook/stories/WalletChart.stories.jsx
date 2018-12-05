import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import {
  WalletChart,
  MuiThemeProvider,
  BioFinanceiraTheme,
  Paper,
} from '../../src'
import { walletExample } from '../../src/Core/mocks'
import {Typography, SeeTheme} from '../../src/index'

class WalletChartStory extends PureComponent {
  render() {
    const { children, theme } = this.props
    return (
      <div className="w-100 h-100 pa2">
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
      </div>
    )
  }
}

storiesOf('WalletChart', module)
  .add('shallow', () => {
    return (
      <WalletChartStory theme={BioFinanceiraTheme}>
          <WalletChart 
          initialInvestment={200000} 
          labelFirstLine='INVESTIMENTOS' 
          labelSecondLine='do José da Silva' 
          wallet={walletExample}
          showLegendPercentage={true}/>
      </WalletChartStory>
    )
  })
  .add('Minha Carteira', () => {
    return (
      <WalletChartStory theme={SeeTheme}>
        <div className='flex items-center mt3'>
          <Paper className='flex flex-column items-center pv5 ph5 w-100'>
              <Typography variant='subtitle1'>Estratégias de Investimentos</Typography>
              <div className='flex flex-row items-center'>
                <WalletChart 
                  initialInvestment={200000} 
                  labelFirstLine='CONFIRA' 
                  labelSecondLine='SUA CARTEIRA' 
                  wallet={walletExample}
                  showLegendPercentage={false}/>
                  <div className='bl b--black-20 mr6 ml5' style={{borderLeft: '1px solid #D4D4D4', height: '150px'}} />
                  <div>
                    <Typography variant='body2'>Composição da carteira</Typography>
                    <Typography>Par Mais Magister FIC FIM CP <br />30%</Typography>
                    <Typography>Par Mais Imperium FIC FIM CP <br />30%</Typography>
                  </div>
              </div>
          </Paper>  
        </div>
      </WalletChartStory>
    )
  })