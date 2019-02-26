import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { walletExample } from '../../../../src/Core/mocks'
import dataset from '../../../assets/Dados_Backend.json'
import { 
  Donut, 
  MuiThemeProvider,
  MyWalletLineChart,
  Typography,
  SeeTheme,
  WalletChart
} from '../../../../src/index'
import style from '../../style'

const ChartStory = (props) => (
  <div style={{
    ...style.section, 
    gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))',
    borderBottom: '1px solid #DEDEDE',
  }}>
    <div style={style.sectionItemWrapper}>
      <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <div>
            {props.children}
          </div>
      </div>
    </div>
    <div style={style.sectionDetails}>
      <Typography variant='body1'>
        {props.tag}
      </Typography>
      <Typography variant='overline' style={style.details}>
        Props
      </Typography>
      {props.details}
    </div>
  </div>
    
)


storiesOf('Components / Charts', module)
  .add('Base', () => (
    <div>

      <ChartStory tag={(
        <div>
          &lt;<span style={style.tag}>Donut </span>/&gt;
        </div>
      )}
      details={(
        <div>
          <Typography variant='caption'>
            columuns: PropTypes.arrayOf(PropTypes.array),
            <br/>
            colors: PropTypes.object,
            <br/>
            labelFirstLine: PropTypes.text,
            <br/>
            labelSecondLine: PropTypes.text,
            <br/>
            size: PropTypes.number,
            <br/>
            width: PropTypes.number
          </Typography>
        </div>
      )}>
        <Donut />
      </ChartStory>
      
      <ChartStory tag={(
        <div>
          &lt;
            <span style={style.tag}>MyWalletLineChart </span>

            <span style={style.attr}>idxDataset=</span>
            <span style={style.value}>
              &#123; 
                data: [arrayOfNumbers], 
                strokeWidth: 2, 
                stroke: '#94ba1d', 
                fill:'none'
              &#125;
            </span>
            <br/>
            <span style={style.attr}>walletDataset=</span>
            <span style={style.value}>
              &#123; 
                data: [arrayOfNumbers], 
                strokeWidth: 2, 
                stroke: '#94ba1d', 
                fill:'none'
              &#125;
            </span>
            <br/>

            <span style={style.attr}>idxRange=</span>
            <span style={style.value}>
              &#123; 
              min: 0.7, 
              max: 1.6, 
              strokeWidth: 2, 
              stroke: '#b6dddc', 
              fill: '#b6dddc4d'
              &#125;
            </span>
            <br/>

            <span style={style.attr}>dateRange=</span>
            <span style={style.value}>'[arrayOfNumbers]' </span>

            <span style={style.attr}>paddingH=</span>
            <span style={style.value}>'50' </span>

            <span style={style.attr}>paddingW=</span>
            <span style={style.value}>'50' </span>

            <span style={style.attr}>yTicks=</span>
            <span style={style.value}>'9' </span>

            <span style={style.attr}>xTicks=</span>
            <span style={style.value}>'5' </span>
          /&gt;
        </div>
      )}
      details={(
        <div>
          <Typography variant='caption'>
            idxDataset:  PropTypes.object,
            <br/>
            walletDataset: PropTypes.object,
            <br/>
            idxRange: PropTypes.object,
            <br/>
            dateRange: PropTypes.array,
            <br/>
            paddingH: PropTypes.number,
            <br/>
            paddingW: PropTypes.number,
            <br/>
            yTicks: PropTypes.number,
            <br/>
            xTicks: PropTypes.number
          </Typography>
        </div>
      )}>
        <MuiThemeProvider theme={SeeTheme}>
        <MyWalletLineChart
          idxDataset={{
            data: dataset.history.idxQuota,
            strokeWidth: '2',
            stroke: '#94ba1d',
            fill:'none'
          }}

          walletDataset={{
            data: dataset.history.walletQuota,
            strokeWidth: '4',
            stroke: '#5EB8C0',
            fill: 'none'
          }}

          idxRange={{
            min: 0.7,
            max: 1.6,
            strokeWidth: 2,
            stroke: '#b6dddc',
            fill: '#b6dddc4d'
          }}
          dateRange={dataset.history.date}

          paddingH={50}
          paddingW={50}
          yTicks={9}
          xTicks={5}
        />
      </MuiThemeProvider>
      </ChartStory>
      
      <ChartStory tag={(
      <div>
        &lt;
          <span style={style.tag}>WalletChart </span>

          <span style={style.attr}>initialInvestment=</span>
          <span style={style.value}>&#123;2000&#125;</span>
          <br/>
          <span style={style.attr}>labelFirstLine=</span>
          <span style={style.value}>'INVESTIMENTOS'</span>
          <br/>

          <span style={style.attr}>labelSecondLine=</span>
          <span style={style.value}>'do José da Silva'</span>
          <br/>

          <span style={style.attr}>wallet=</span>
          <span style={style.value}>[arrayOfObjects]</span>
          <br/>
          <span style={style.attr}>showLegendPercentage=</span>
          <span style={style.value}>&#123;true&#125;</span>
        /&gt;
      </div>
      )}
      details={(
        <div>
          <Typography variant='caption'>
            classes: PropTypes.object.isRequired,
            <br/>
            initialInvestment: PropTypes.number,
            <br/>
            labelFirstLine: PropTypes.string,
            <br/>
            labelSecondLine: PropTypes.string,
            <br/>
            wallet: PropTypes.arrayOf(PropTypes.object),
            <br/>
            legend: PropTypes.bool
          </Typography>
        </div>
      )}>
      <WalletChart 
        initialInvestment={200000} 
        labelFirstLine='INVESTIMENTOS' 
        labelSecondLine='do José da Silva' 
        wallet={walletExample}
        showLegendPercentage={true}
        identication={'wallet-chart-2'}
      />
      </ChartStory>
    </div>
    ))
