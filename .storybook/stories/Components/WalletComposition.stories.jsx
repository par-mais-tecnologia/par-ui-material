import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  MuiThemeProvider,
  WalletComposition,
  SeeTheme,
  Typography
} from '../../../src'
import withTests from '../withTests'
import { walletExample } from '../../../src/Core/mocks'
import style from '../style'

const WalletCompositionStory = () => (
  <div style={{
      ...style.section, 
      gridTemplateColumns: 'repeat(auto-fill,minmax(30rem, 1fr))'
    }}>
      <div style={{...style.sectionItemWrapper, placeSelf: 'center'}}>
        <div style={{...style.sectionItem, borderBottom: 'none'}}>
          <MuiThemeProvider theme={SeeTheme}>
            <WalletComposition data={walletExample} />
          </MuiThemeProvider>
        </div>
      </div>
      <div style={style.sectionDetails}>
        <Typography variant='body1'>
          <div>
            &lt;
              <span style={style.tag}>WalletComposition </span>

              <span style={style.attr}>data</span>=
              <span style={style.value}>&#123;[&#123;obj&#125;, &#123;obj&#125;, &#123;obj&#125;, &#123;obj&#125;]&#125; </span>
            /&gt;
          </div>
        </Typography>
        <Typography variant='title'>
          How to use?
        </Typography>
        <Typography variant='subtitle1'>
          To interact with the component you must send an <span style={style.value}>array of objects </span> 
          to the <span style={style.value}>data</span> prop containing the following keys: <span style={style.tag}>
          fundName and percentage.</span>
        </Typography>
        <Typography variant='overline' style={style.details}>
          Props
        </Typography>
        <Typography variant='caption'>
          data:  PropTypes.array
        </Typography>
      </div>
  </div>
)

storiesOf('Components ', module)
  .addDecorator(withTests('WalletComposition'))
  .add('WalletComposition', () => <WalletCompositionStory /> )