import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import {
  MuiThemeProvider,
  SeeTheme,
  Typography,
  LegendChart
} from '../../../src'
import { walletExample } from '../../../src/Core/mocks'
import { getStrategies } from '../../../src/WalletChart/functions'
import withTests from '../withTests'
import style from '../style'
import PropsTable from '../../utils/PropsTable'

const LegendChartStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={SeeTheme}>
            <LegendChart 
            initialInvestment={200000} 
            strategies={getStrategies(200000, walletExample)} 
            showPercentage={boolean('showPercentage', true)}/>
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          &lt;
            <span style={style.tag}>LegendChart </span>

            <span style={style.attr}>initialInvestment</span>=
            <span style={style.value}>200000</span>
            <br />
            <span style={style.attr}>strategies</span>=
            <span style={style.value}>[&#123;obj&#125;, &#123;obj&#125;, &#123;obj&#125;]</span>
            <br />
            <span style={style.attr}>showPercentage</span>=
            <span style={style.value}>
              &#123;{boolean('showPercentage', true)? 'true' : 'false'}&#125;
            </span>
          /&gt;
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <PropsTable of={LegendChart}/>
      </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withKnobs)
  .addDecorator(withTests('LegendChart'))
  .add('LegendChart', () => <LegendChartStory />)