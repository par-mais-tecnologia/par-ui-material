import React from 'react'
import dataset from '../assets/Dados_Backend.json'
import { storiesOf } from '@storybook/react'
import {
  MuiThemeProvider,
  MyWalletLineChart,
  SeeTheme
} from '../../src'
import { withKnobs, number, text} from '@storybook/addon-knobs'

storiesOf('MyWalletLineChart', module)
  .addDecorator(withKnobs)
  .add('Base', () => {
    return (
      <MuiThemeProvider theme={SeeTheme}>
        <MyWalletLineChart
          idxDataset={{
            data: dataset.map((obj) => obj.idxQuota),
            strokeWidth: number('Index Stroke Width','2'),
            stroke: text('Index Stroke Color (HEX)','#94ba1d'),
            fill:'none'
          }}

          walletDataset={{
            data: dataset.map((obj) => obj.walletQuota),
            strokeWidth: number('Wallet Stroke Width','4'),
            stroke: text('Wallet Stroke Color (HEX)','#5EB8C0'),
            fill: 'none'
          }}

          idxRange={{
            min: number('Minimun value of Index','0.86'),
            max: number('Maximun value of Index', '1.18'),
            strokeWidth: number('Area Stroke Width','2'),
            stroke: text('Area Stroke Color (HEX)','#b6dddc'),
            fill: text('Area Fill Color (HEX)','#b6dddc4d')
          }}
          dateRange={ dataset.map((obj) => obj.date)}

          paddingH={number('Height padding (inside svg)', 50)}
          paddingW={number('Width padding (inside svg)', 50)}
          yTicks={number('Number of Y ticks', 9)}
          xTicks={number('Number of X ticks', 5)}
        />
      </MuiThemeProvider>
  )
})