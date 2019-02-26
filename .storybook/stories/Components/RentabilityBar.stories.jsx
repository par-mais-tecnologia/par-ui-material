import React from 'react'
import { storiesOf } from '@storybook/react'
import {RentabilityBar, SeeTheme, MuiThemeProvider, Typography} from '../../../src'
import { withKnobs } from '@storybook/addon-knobs'
import style from '../style'

const data = [
    {
      "idxQuota": 0,
      "walletQuota": 0,
      "rentability": 500.00,
      "date": "2018-01-01"
    },
    {
      "idxQuota": 0.024619999358743705,
      "walletQuota": 0.000003773000001316973,
      "rentability": 500.00,
      "date": "2018-02-01"
    },
    {
      "idxQuota": 0.04924606029859113,
      "walletQuota": 0.028294717000010294,
      "rentability": 500.00,
      "date": "2018-03-01"
    },
    {
      "idxQuota": 0.07387818476420893,
      "walletQuota": 0.04387398000000875,
      "rentability": 500.00,
      "date": "2018-04-01"
    },
    {
      "idxQuota": 0.09851637275561931,
      "walletQuota": 0.06141432799999791,
      "rentability": 500.00,
      "date": "2018-05-01"
    },
    {
      "idxQuota": 0.12316062816213336,
      "walletQuota": 0.08605948300000055,
      "rentability": 500.00,
      "date": "2018-06-01"
    },
    {
      "idxQuota": 0.1478109509838399,
      "walletQuota": 0.11379389099999138,
      "rentability": 500.00,
      "date": "2018-07-01"
    },
    {
      "idxQuota": 0.1724673412206723,
      "walletQuota": 0.13874278399998996,
      "rentability": 500.00,
      "date": "2018-08-01"
    },
    {
      "idxQuota": 0.19712980276203051,
      "walletQuota": 0.1587130289999905,
      "rentability": 500.00,
      "date": "2018-09-01"
    },
    {
      "idxQuota": -0.2217983356078923,
      "walletQuota": 0.18832739900001005,
      "rentability": 500.00,
      "date": "2018-10-01"
    },
    {
      "idxQuota": 0.24647294170294654,
      "walletQuota": 0.21617783100000842,
      "rentability": 500.00,
      "date": "2018-11-01"
    },
    {
      "idxQuota": 0.27115362299188206,
      "walletQuota": -0.23889114299999736,
      "rentability": 500.00,
      "date": "2018-12-01"
    }
  ]

const RentabilityBarStory = (props) => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={SeeTheme}>
            <RentabilityBar
              header={[
                {
                  title: 'Rentabilidade em R$',
                  value: 100.00,
                  type: 'currency'
                },
                {
                  title: 'Rentabilidade em %',
                  value: -0.01
                },
                {
                  title: 'cdi',
                  value: 0.4786554
                }
              ]}

              periods={data}
            />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          <div>
              &lt;
                <span style={style.tag}>RentabilityBar </span>

                <br />
                <span style={style.attr}>header</span>=
                <span style={style.value}>
                  &#123;
                    [
                      &#123;
                      title: 'Rentabilidade em R$',
                      value: 100.00,
                      type: 'currency'
                      &#125;,
                    ]
                  &#125;  
                </span>

                <br />
                <span style={style.attr}>periods</span>=
                <span style={style.value}>
                  &#123;
                    [
                      &#123;
                        idxQuota: 0,
                        walletQuota: 0,
                        rentability: 500.00,
                        date: "2018-01-01"
                      &#125;,
                    ]
                  &#125;  
                </span>
              /&gt;
          </div>
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          header:  PropTypes.array,
          <br/>
          periods: PropTypes.array
        </Typography>
      </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withKnobs)
  .add('RentabilityBar', () => <RentabilityBarStory />)
